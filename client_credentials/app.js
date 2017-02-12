/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library
var firebase = require("firebase"); //add firebase

var client_id = '6020c8fabb1c4ee49643850c17e4d18f'; // Your client id
var client_secret = 'ee07ab41c0d146f084468e4c4f378afc'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };

    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});


//GET user's top artists...


    // //NEW - trying to do curl command....
    // $.ajax({
    //   url: 'https://api.spotify.com/v1/me/top/artists',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "Bearer BQCazNHadFCufifVOkQtW4yvdgUe3SZC858-nlzyN7u2mfsGnMHB_mNz7XHJ45FiVxOL2Bgo6AxSW0uN75RdJuLkNMLV6ceH6qIX-t4BBzYMDceIonvN27OymfHFIZkBnNU-OCMrbX6ir2oL7nwhpk7KR5kaB2ui5J336O2YfUQ8M_onpyuYpxUq8sBYtueYYJ7gP9ompFHE2P-nrdY_iBuNyGpX1Xc6M0lDj6eJqe2CtyKPyT2E4Q")
    //   }, success: function(data) {
    //     alert(data);
    //     //process the JSON
    //     console.log(data);
    //   }
    // })



