var pingPong = function(number) {

  if (isNaN(number) === true) {
    return "Error: Please enter numbers only";
  }



for (var i = 1; i <= number; i += 1) {
  $("ul").append("<li>" + i + "</li>");
}

};






$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("ul").text(result);
  });
});
