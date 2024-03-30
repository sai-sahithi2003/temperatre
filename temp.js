function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
  
    if (unit === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
      document.getElementById("result").innerText = `${temperatureInput} Celsius is ${convertedTemperature.toFixed(2)} Fahrenheit`;
    } else if (unit === "fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
      document.getElementById("result").innerText = `${temperatureInput} Fahrenheit is ${convertedTemperature.toFixed(2)} Celsius`;
    }
    // You can add conversion for Kelvin here if you want
  }
  