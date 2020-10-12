//function to determine any given night's number of hours of rest
const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8;
        break;
      case "tuesday": 
        return 7;
        break;
      case "wednesday": 
        return 5;
        break;
      case "thursday":
        return 6;
        break;
      case "friday": 
        return 9;
        break;
      case "saturday": 
        return 10;
        break;
        case "sunday":
        return 11;
        break;
        default: 
        return 'error!'
      }
    };
    
    //testing
    //console.log(getSleepHours('tuesday'));
    
    //getting actual sleep hours refactored code
    const getActualSleepHours = () =>  8 + 7 + 5 + 6 + 9 + 10 + 11;
    
    //get ideal sleep hours refactored code
    const getIdealSleepHours = idealHours => idealHours * 7;
    
    
    //testing
    //console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
    
    //console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
    
    //function to determine sleep debt
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(8);
      if(actualSleepHours === idealSleepHours){
        console.log(`Your Sleep for this Week is ${actualSleepHours} hours: You got the perfect amount of sleep for this week!`)
      } else if(actualSleepHours > idealSleepHours){
        console.log(`Your Sleep for this Week is ${actualSleepHours} hours: That is ${actualSleepHours - idealSleepHours} hour(s) more! You overslept for this week.`)
      } else{
        console.log(`Your Sleep for this Week is ${actualSleepHours}hours: That is ${idealSleepHours - actualSleepHours} hour(s) less! You need to try and rest more this week.`)
      }
    }
    
     calculateSleepDebt();
    