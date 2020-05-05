
// Assign the sighting data from `data.js` to a variable
var sightings = data;

// Assign the referne to the table body
var tbody = d3.select("tbody");

function showSightings(arraySightings) {
// empty the table in case it was already shown
tbody.html("");

  // loop through the data
  arraySightings.forEach((object) => {
    // append tr to each sighting object
    var row = tbody.append("tr");
    // check each in console.log
    Object.entries(object).forEach(([key,value]) => {
      //append a cell for each value in the object
      var cell = row.append("td");
      cell.text(value)
    });
  });
}

showSightings(sightings);

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property for  the input element
  var inputValue = inputDate.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredSighting = sightings.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredSighting);

showSightings(filteredSighting);
});