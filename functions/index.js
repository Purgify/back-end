const BASE_URL = "https://api.spotify.com/"

const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.detectArtist = functions.https.onRequest((request, response) => {
  // get query param from request for the artist name to search
  // call spotify API to get artist URI
  
  // send success or error response to client`
});
