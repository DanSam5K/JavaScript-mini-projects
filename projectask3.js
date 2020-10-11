//define a variable with empty string
const userName = "";
// use ternary operator to greet user
userName === "" ? console.log('Hello!') : console.log(`Hello, ${userName}!`);
//creat variable for use to Ask question 
const userQuestion ="";
userQuestion === "" ? console.log(`Ask any  Question ${userName}`):console.log(`The user asked: ${userQuestion}?`);

//create a random number
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";
//create a control flow that take RN and assign to 8ball using switch statement
switch(randomNumber) {
  case 0 : eightBall = "it is certain" ;
  break;
  case 1 : eightBall = "it is decidedly so" ;
  break;
  case 2 : eightBall = "Reply hazy try again" ;
  break;
  case 3 : eightBall = "Cannot predict now" ;
  break;
  case 4 : eightBall = "Do not count on it" ;
  break;
  case 5 : eightBall = "My sources say no" ;
  break;
  case 6 : eightBall = "Outlook not so good" ;
  break;
  case 7: eightBall = "Signs point to yes" ;
  break;
  default: 
   eightBall ="No prediction";
}

console.log(`The eight ball answered: ${eightBall}`);

// if else statement to assign value to *Ball 
if(randomNumber === 0){
   eightBall = 'You are Not doing well';
} else if(randomNumber === 1) {
   eightBall = 'You stand a chance' 
} else if(randomNumber === 2) {
   eightBall = 'Nice work starting on that footnote';
} else if(randomNumber === 3) {
  eightBall = 'Not many have that chance';
} else if(randomNumber === 4) {
  eightBall = 'We can do much with what you have';
} else if(randomNumber === 5) {
  eightBall = 'No one can stand you now';
} else if(randomNumber === 6) {
  eightBall = 'Indeed you are unstoppable';
} else if(randomNumber === 7) {
  eightBall = 'At the top level of your game right now';
} else {
  eightBall = 'Out of league';
}

console.log(`The eight ball answered: ${eightBall}`);
