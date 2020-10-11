//my age variable
const myAge = 29;
//early years that can change
let earlyYears = 2;
earlyYears *= 10.5;
//later yrs
let laterYears = myAge - 2;
laterYears *= 4;
//log early yrs and later yrs
console.log(earlyYears, laterYears);

//age in dog years
const myAgeInDogYears = earlyYears + laterYears;
//my name converted to lower case
const myName = "DANSAM".toLowerCase();

//log my name and age in dog yrs
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)