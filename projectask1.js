//value of Temp in Kelvin
let kelvin = 500;
// temp of kelvin in celsius
const celsius = kelvin - 273;

// temp converted to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//roundingup temp in fahrenheit
fahrenheit = Math.floor(fahrenheit);
//log the result of tem in Fahrnht.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// extra work converting celsius to newton scale
let newton = celsius * (33 / 100);
//round up newton temp
newton = Math.floor(newton);
//log result of temp in newton to console
console.log(`The temperature is ${newton} degrees Newton.`)