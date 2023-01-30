let TripApiKey = "29CB0A3EE8A74953A71A7964758809DA";
const contentContainer = document.getElementById("content");

const options = {
  method: "GET",
  headers: { accept: "application/json" },
  cors: "no-cors",
};

// TripAdvisor API - Location Search API must first obtain unique Location ID, fetch function to obtain Location ID.

fetch(
  "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/search?key=29CB0A3EE8A74953A71A7964758809DA&searchQuery=Cintsa%2C%20South%20Africa&category=Hotels&language=en",
  options
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    tripAdvisorDetails(data.data);
  });

// TripAdvisor API - Location Details API requires Location ID to return comprehensive information about a location, fetch function to obtain details.

function tripAdvisorDetails(data) {
  for (var i = 0; i < 4; i++) {
    if (data[i].location_id !== "11446402") {
      fetch(
        "http://localhost:8080/https://api.content.tripadvisor.com/api/v1/location/" +
          data[i].location_id +
          "/details?key=29CB0A3EE8A74953A71A7964758809DA&language=en&currency=USD"
      )
        .then((response) => response.json())
        .then(function (data) {
          if (data) {
            console.log("SUCCESS", data);
            const card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML = `             
            <div id="ta-name"><p>Name: ${data.name}</p></div>
            <div id="ta-address"><p>Address: ${data.address_obj.address_string}</p></div>
            <div id="ta-description"><p>Category: ${data.category.name}</p></div>
            <div id="ta-rating"><p>Rating: ${data.rating}</p></div>
            <button id="ta-button" class="button">
            <a href="${data.web_url}">See More</a>
            </button>`;
            contentContainer.appendChild(card);
          }
        });
    }
  }
}
