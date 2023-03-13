const request = require("request");
let userArg = "";
process.argv.forEach(function(val, index, array) {
  userArg = array[2];
});
let callback = function(data) {
  console.log(data);
};
const findBreed = function(userArg, callback) {
  let searchURL = "https://api.thecatapi.com/v1/breeds/search?q=" + userArg;

  request(searchURL, (error, response, body) => {
    if (error) {
      console.log("Error in finding address");
      callback(error);
    } else {
      let jsonBody = JSON.parse(body)[0];
      if (jsonBody.name === userArg) {
        console.log(jsonBody.description);
      } else {
        console.log("The requested breed is not found");
      }
    }
  });
};
findBreed(userArg, callback);
