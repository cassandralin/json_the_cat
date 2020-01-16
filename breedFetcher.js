const request = require('request'); // installed request library, requesting to use it

// const args = process.argv.slice(2); // using information from command line
// const url = args[0]; //first element of command line argument after slice
// const breed = args[0]; //


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q='+ breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0 || error && error.details) {
      callback(error, null);
    }
    if (body) {
      const data = JSON.parse(body);
      if (data && data[0]) {
        const data = JSON.parse(body);
        callback(null, data[0].description.trim());
      }
    }
  });
};


module.exports = { fetchBreedDescription };

// request('https://api.thecatapi.com/v1/breeds/search?q='+ breed, function (error, response, body) { // adds breed to the end of the url
//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log('Breed cannot be found');
//   }
//   if (error && error.details) {
//     console.error('error:', error);
//     return;
//   }
//   if (body) {
//     const data = JSON.parse(body);
//     if (data && data[0]){
//       const data = JSON.parse(body);
//       console.log(data[0].description);
//       console.log(typeof data);
//     }
//   }
// });

//Notes 'error' is never undefined, it is a string