const functions = require("firebase-functions");
const SpotifyWebApi = require("spotify-web-api-node");
const SPOTIFY_CLIENT_ID = functions.config().spotify.client_id;
const SPOTIFY_CLIENT_SECRET = functions.config().spotify.client_secret;

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET
});

exports.detectArtist = functions.https.onRequest((request, response) => {
  // get query param from request for the artist name to search
  const artistName = request.query.name;
  // call spotify API to get artist URI
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi
        .searchArtists(artistName)
        .then(data => {
          //save in the database

          //send data to front end
          response.send({ data: data.body.artists.items });
        })
        .catch(err => console.error(err));
    },
    function(err) {
      console.error(
        "Something went wrong when retrieving an access token",
        err.message
      );
    }
  );
  function writeArtistData(URI, name, popularity, imageUrl) {
    firebase.database().ref('users/' + URI).set({
      username: name,
      popularity: popularity,
      picture : imageUrl
    });
  }
});
