let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
let enteredName = prompt("Enter a city:");
enteredName = enteredName.charAt(0).toUpperCase() + enteredName.slice(1);

if (enteredName === "Paris") {
alert(
    `It is currently ${weather.paris.temp}°C (${Math.round(
    weather.paris.temp * 1.8 + 32
    )}°F) in ${enteredName} with a humidity of ${weather.paris.humidity}%`
);
} else if (enteredName === "Tokyo") {
alert(
    `It is currently ${weather.tokyo.temp}°C (${Math.round(
    weather.tokyo.temp * 1.8 + 32
    )}°F) in ${enteredName} with a humidity of ${weather.tokyo.humidity}%`
);
} else if (enteredName === "Lisbon") {
alert(
    `It is currently ${weather.lisbon.temp}°C (${Math.round(
    weather.lisbon.temp * 1.8 + 32
    )}°F) in ${enteredName} with a humidity of ${weather.lisbon.humidity}%`
);
} else if (enteredName === "San Francisco") {
alert(
    `It is currently ${weather["san francisco"].temp}°C (${Math.round(
    weather["san francisco"].temp * 1.8 + 32
    )}°F) in ${enteredName} with a humidity of ${
    weather["san francisco"].humidity
    }%`
);
} else if (enteredName === "Oslo") {
alert(
    `It is currently ${weather.oslo.temp}°C (${Math.round(
    weather.oslo.temp * 1.8 + 32
    )}°F) in ${enteredName} with a humidity of ${weather.oslo.humidity}%`
);
} else {
alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${enteredName}`
);
}
  