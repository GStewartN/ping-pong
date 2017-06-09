var pingPong = function(number) {


  var validNumber = number;

  if (isNaN(validNumber)) {
    return "Error: Please numbers only";
  } else {
    return "valid number";
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
