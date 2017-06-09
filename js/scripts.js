var pingPong = function(number) {

  if (isNaN(number) === true) {
    return "Error: Please enter numbers only";
  }

var newNumber = "";

for (var i = 1; i <= number; i += 1) {
  if (i % 3 === 0) {
    return newNumber.concat("Ping");
  }
}



};


























$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = ($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});
