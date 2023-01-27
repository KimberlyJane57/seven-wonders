let TripApiKey = "1C773CEA7D43401184F772518DA1207C";

// const options = {
//   method: "GET",
//   headers: { accept: "application/json" },
//   cors: "no-cors",
// };

// fetch(
//   "https://remove-cors.vercel.app/https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=48.63595145114208%2C-1.5117471804227718&key=1C773CEA7D43401184F772518DA1207C&language=en",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));


const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://remove-cors.vercel.app/https://api.content.tripadvisor.com/api/v1/location/21124409/details?key=1C773CEA7D43401184F772518DA1207C&language=en&currency=USD', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));