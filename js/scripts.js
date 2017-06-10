var pingPong = function(number) {

  if (isNaN(number) === true) {
    return "Error: Please enter numbers only";
  }

for (var i = 1; i <= number; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    $("ul").append("<li>" + "PingPong" + "</li>");
  } else if (i % 5 === 0) {
      $("ul").append("<li>" + "Pong" + "</li>");
  } else if (i % 3 === 0) {
      $("ul").append("<li>" + "Ping" + "</li>");
  } else {
      $("ul").append("<li>" + i + "</li>");
  }
}

};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").show("ul").text(result);
  });
});
