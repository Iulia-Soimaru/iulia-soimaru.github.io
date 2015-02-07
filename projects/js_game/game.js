
// var findImage = document.getElementsByClassName("image");
// var y = function(){
//   console.log('boom')
// }
//  for(var i=0;i<classname.length;i++){
//         classname[i].addEventListener('click', myFunction, false);
//     }
// i.addEventListener("click", y);



 // var classname = document.getElementsByClassName("classname");

 //    var myFunction = function() {
 //        var attribute = this.getAttribute("data-myattribute");
 //        alert(attribute);
 //    };

 //    for(var i=0;i<classname.length;i++){
 //        classname[i].addEventListener('click', myFunction, false);
 //    }

// alert("Welcome to the Math Game");
// var number_1 = prompt("Select your first number between 1 and 100");
// var number_2 = prompt("Select your second number between 1 and 100");
// if (number_1 >= 1 && number_1 <= 100 && number_2 >= 1 && number_2 <= 100){
//   alert("Thank you, numbers you entered are valid")
// } else{
//   alert("Please try again, one or two of the numbers you entered are not valid: " + number_1 + " or " + number_2);
//   prompt("Select your first number between 1 and 100");
//   prompt("Select your second number between 1 and 100");
// }

var number_1 = prompt("Select your first number between 1 and 100");
var number_2 = prompt("Select your second number between 1 and 100");
var correct = 0;
var answer = 0;
function getNumbers (a, b) {
  a = number_1;
  b = number_2
  document.write("<p>Your first selected number is " + a + "</p>");
  document.write("<p>Your second selected number is " + b + "</p>");
}
function addition(){
  var sum = number_1 + number_2
  answer = prompt("Write here how much will be " + number_1 + " + " + number_2 + " ?");
  if (answer == sum) {
    alert("Great answer!");
    correct ++;
  } else {
    alert("I am not sure your answer is correct, let's go to the next question.");
  }

}
function substraction(){
  var sub = number_1 - number_2
  answer = prompt("Write here how much will be " + number_1 + " - " + number_2 + " ?");
  if (answer == sub) {
    alert("Great answer!");
    correct ++;
  } else {
    alert("I am not sure your answer is correct, let's go to the next question.");
  }

}
function multiplication(){
  var mul = number_1 * number_2
  answer = prompt("Write here how much will be " + number_1 + " * " + number_2 + " ?");
  if (answer == mul) {
    alert("Great answer!");
    correct ++;
  } else {
    alert("I am not sure your answer is correct, let's go to the next question.");
  }

}
function division(){
  var div = number_1 / number_2
  answer = prompt("Write here how much will be " + number_1 + " / " + number_2 + " ?");
  if (answer == div) {
    alert("Great answer!");
    correct ++;
  } else {
    alert("I am not sure your answer is correct, let's go to the next question.");
  }

}

getNumbers();
document.write("<h3>Let's do some math to these numbers:</h3>" + "<p>You will see your answers displayed below this text</p>");
addition();
document.write("<p>" + number_1 + " + " + number_2 + " = " + answer + "</p>");
substraction();
document.write("<p>" + number_1 + " - " + number_2 + " = " + answer + "</p>");
multiplication();
document.write("<p>" + number_1 + " * " + number_2 + " = " + answer + "</p>");
division();
document.write("<p>" + number_1 + " / " + number_2 + " = " + answer + "</p>");
document.write("<h3>You have " + correct + " correct answers</h3>");




