let TripApiKey = "29CB0A3EE8A74953A71A7964758809DA";

const options = {
  method: "GET",
  headers: { accept: "application/json" },
  cors: "no-cors",
};

// TripAdvisor API - Location Search API must first obtain unique Location ID, fetch function to obtain Location ID.

fetch(
  "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/search?key=29CB0A3EE8A74953A71A7964758809DA&searchQuery=AlUla%2C%20Saudi%20Arabia&category=Hotels&language=en",
  options
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    tripAdvisorDetails(data.data);
  });

// TripAdvisor API - Location Details API requires Location ID to return comprehensive information about a location, fetch function to obtain details.

function tripAdvisorDetails(data) {
  for (var i = 0; i < 7; i++) {
    if (
      data[i].location_id !== "11446402" &&
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
}
