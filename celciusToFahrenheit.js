function celsiusToFahrenheit(celsius) {
    const calculation = celsius * (9 / 5) + 32;
    return calculation;
}
const result = celsiusToFahrenheit(27);
console.log(`Temperature is ${result}°F`);