var pingPong = function(number) {

var resultList = [];

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
  return resultList;
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $("ul").empty();

    result.forEach(function(number) {
      $("ul").append("<li id='result'>" + number + "</li>");
    });
  });
});
