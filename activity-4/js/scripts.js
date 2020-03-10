var user = "Nathanael";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest Unity reviews";

var greetingElement = document.getElementById("greeting");

greetingElement.textContent = greeting;

var price = 100,
    studentDiscount = .50,
    studentPrice = price - (price * studentDiscount),
    priceElement = document.getElementById("price"),
    studentPriceElement = document.getElementById("student-price");

priceElement.textContent = price.toFixed(2);
studentPriceElement.textContent = studentPrice.toFixed(2);