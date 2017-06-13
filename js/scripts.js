var resultList = [];

var pingPong = function(number) {

  if (isNaN(number) === true) {
    return "Error: Please enter numbers only";
  }

  for (var i = 1; i <= number; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultList.push("PingPong");
    } else if (i % 5 === 0) {
        resultList.push("Pong");
    } else if (i % 3 === 0) {
        resultList.push("Ping");
    } else {
        resultList.push(i);
    }
  }
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    $("#result ul").empty();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    resultList.forEach(function(number) {
    $("#result").show("ul").append("<li>" + number + "</li>");
    });
  });
});
