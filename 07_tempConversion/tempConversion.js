const convertToCelsius = function(tempF) { // 0 --> 32

  let tempC = ((tempF-32)*(5/9));
  console.log(Math.round(tempC*10)/10);

  return Math.round(tempC*10)/10;

}

const convertToFahrenheit = function(tempC) { //32 --> 0

  let tempF = (tempC*(9/5)+32);
  console.log(Math.round(tempF*10)/10);

  return Math.round(tempF*10)/10;

}

convertToCelsius(100);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
