//creating function to get user choice 
const getUserChoice = userInput => {
    //make userinput case-insensitive
    userInput = userInput.toLowerCase();
    //using control  to validate userinput cheat that make user win no matter what 
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){return userInput} else{
      console.log('Error!');
    }
  };
  //helping the computer make a choice
  const getComputerChoice = () => {
    //get whole number between 0and2
    const randomNum = Math.floor(Math.random()*3);
    //assign outcome to compcjoice using controlflow
    if(randomNum === 0){
      return 'rock';
    } else if(randomNum === 1){
      return 'paper';
    } else{
      return 'scissors';
    }
  }
  //determine winner function
  const determineWinner = (userChoice, compChoice) => {
  // dealing with outcome tie
  if (userChoice === compChoice){
    return 'The game is tie';
  } 
  // dealing with computer win or user win
  if(userChoice ==='rock'){
    if(compChoice === 'paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
   }
   if(userChoice ==='paper'){
    if(compChoice === 'scissors'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
   }
   if(userChoice ==='scissors'){
    if(compChoice === 'rock'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
   }
   //irrespective of hwat computer choice is bomb make user win
   if(userChoice === 'bomb'){
     return 'You won'
   }
  }
  //console.log(getUserChoice('scissors'));
  //console.log(getComputerChoice());
  //console.log(determineWinner('paper', 'scissors')); 
  // prints something like 'The computer won!'
  //console.log(determineWinner('paper','paper')); 
  // prints something like 'The game is a tie!'
  //console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
  
  const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const compChoice = getComputerChoice();
  
  console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + compChoice);
     console.log(determineWinner(userChoice, compChoice));
  };
  
  playGame();
  