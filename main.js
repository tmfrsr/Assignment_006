
var cities = ["nyc", "la", "austin", "sf", "sydney"]
// create a variable "cities" containing an array of city names
var optionTags = ""
cities.forEach(function(name) {
// for each piece of data in the array "cities", place it in a variable named "name", and then run the following function:
  name = name.toUpperCase()
  optionTags = optionTags + "<option>" + name + "</option>"
// add "<option>" + "city name" + "</option>" to the variable optionTags (""), and repeat this for each city name, creating a very long string (<option>nyc</option><option>la</option>etc...)
})
$("#city-type").append(optionTags)
// add the string within optionTags to the html within the html element "city-type"
$("#city-type").change(function(event) {
// tell the html element "city-type" to listen for a change, and if detected, run the following function:
  var userInput = $("#city-type").val()
// place the value of "city-type" into the variable "userInput"
  $("body").removeClass()
// remove the class assigned to the html's body tag
  cities.forEach(function(name) {
// for each piece of data in the array "cities", place it in a variable named "name", and then run the following function:
    name = name.toUpperCase()
    if (userInput === name) {
      $("body").addClass(name)
      // if the variable "userInput" is equal to the variable "name", give the html's body tag the class "name" (the string stored in name)
      }
  })
})
