//8 Napisati funkciju celsiusToFahrenheit koja prima temperaturu u stepenima Celzijusa (°C) i vraća odgovarajuću temperaturu u stepenima Farenhajta (°F).
// Formula za konverziju je sledeća: [°F] = [°C] × 9 ⁄ 5 + 32.

var fahrenheit = 0; 
function celsiusToFahrenheit (celsius){
    fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(10));