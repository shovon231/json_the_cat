const request = require("request");

let catDesc = "";

const fetchBreedDescription = function(breedName, callback) {
  let searchURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(searchURL, (error, response, body) => {
    if (error) {
      console.log("Error in finding address");
      callback(error, null);
    } else {
      let jsonBody = JSON.parse(body)[0];
      if (jsonBody.name === breedName) {
        catDesc = jsonBody.description;
      } else {
        catDesc = "The requested breed is not found";
      }
      callback(null, catDesc);
    }
  });
};

module.exports = { fetchBreedDescription };
