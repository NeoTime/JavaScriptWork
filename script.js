var date = new Date()
document.body.innerHTML = "<h1>Today is: " + date + "</h1>";

var a = 5;
var b = 4;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);

function findBiggestFraction(a, b) {
  a>b ? console.log("a: ", a) : console.log("b: ", b)
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(1/2, 3/8);
