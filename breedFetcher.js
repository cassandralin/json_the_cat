const request = require('request'); // installed request library, requesting to use it

const args = process.argv.slice(2); // using information from command line
const url = args[0]; //first element of command line argument after slice
const breed = args[0]; // 

request('https://api.thecatapi.com/v1/breeds/search?q='+ breed, function (error, response, body) { // adds breed to the end of the url
  const data = JSON.parse(body);   
  if (data.length === 0) {
    console.log('Breed cannot be found');
  }
  if (error && error.details) {
    console.error('error:', error); 
    return;
  }  
  if (body) {
    const data = JSON.parse(body); 
    if (data && data[0]){
      const data = JSON.parse(body);
      console.log(data[0].description);
      console.log(typeof data);
    }   
  } 
  // console.log(response);
  // const data = JSON.parse(body); 
  // if (data && data[0] &&){
  //   const data = JSON.parse(body);
  //   console.log(data[0].description);
  //   console.log(typeof data);
  // }

  // // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // // console.log('body:', body); // Print the HTML for the Google homepage.
  // const data = JSON.parse(body);
  // console.log(data[0].description);
  // console.log(typeof data);
});

//Notes 'error' is never undefined, it is a string