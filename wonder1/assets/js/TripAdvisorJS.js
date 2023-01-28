let TripApiKey = "29CB0A3EE8A74953A71A7964758809DA";

const options = {
  method: "GET",
  headers: { accept: "application/json" },
  cors: "no-cors",
};

fetch(
  "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/search?key=29CB0A3EE8A74953A71A7964758809DA&searchQuery=Mont%20St%20Michel%2C%20France&category=hotel&language=en",
  options
)
  //  url: 'https://api.content.tripadvisor.com/api/v1/location/search?key=29CB0A3EE8A74953A71A7964758809DA&searchQuery=cappadocia%2C%20turkey&category=hotel&language=en',
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    tripAdvisorDetails(data.data);
  });

function tripAdvisorDetails(data) {
  for (var i = 0; i < 7; i++) {
    if (
      data[i].location_id !== "11446402" ||
      data[i].location_id !== "11457621"
    ) {
      fetch(
        "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/" +
          data[i].location_id +
          "/details?key=29CB0A3EE8A74953A71A7964758809DA&language=en&currency=USD"
      )
        .then((response) => response.json())
        .then(function (data) {
          // console.log(data);
          if (data) {
            console.log(data);
          }
        });
    }
  }
  // fetch(
  //   "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/" +
  //     location_id +
  //     "/details?key=29CB0A3EE8A74953A71A7964758809DA&language=en&currency=USD"
  // )
  //   .then((response) => response.json())
  //   .then(function (data) {
  //     // console.log(data);
  //     if (data) {
  //       console.log(data);
  //     }
  //   });
}
