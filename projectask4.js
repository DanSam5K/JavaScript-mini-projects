let raceNumber = Math.floor(Math.random() * 1000);
//var for register early
let earlyRegistrant = true;
//var for runner age
let runnerAge = 26;
//control flow to check if adult and register early
if (runnerAge > 18 && earlyRegistrant === true) {
  raceNumber += 1000;
} 
//controlflow checking age and registration time and then determine race time
if(runnerAge > 18 && earlyRegistrant === true) {
  console.log(`Runner with Number:${raceNumber} will be runing at 9:30 am`);
} else if (runnerAge > 18 && earlyRegistrant === false) {
  console.log(`Runner with Number:${raceNumber} will be runing at 11:00 am`);
} else if(runnerAge < 18 ){
  console.log(`Runner with Number:${raceNumber} will be runing at 12:30 pm`);
} else {
  console.log(`Runner with Number:${raceNumber} Kindly check with registration desk`);
}