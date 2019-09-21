const functions = require("firebase-functions");
const SPOTIFY_CLIENT_ID = functions.config().spotify.client_id;
const SPOTIFY_CLIENT_SECRET = functions.config().spotify.client_secret;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.detectArtist = functions.https.onRequest((request, response) => {
  // get query param from request for the artist name to search
  const artistName = request.query.name;
  // call spotify API to get artist URI

  // send success or error response to client
  response.send(`You want to search for ${artistName}`);
});
