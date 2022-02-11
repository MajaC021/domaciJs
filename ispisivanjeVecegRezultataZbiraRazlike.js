//3 Napisati program koji kreira 2 promenljive a i b i dodeljuje im vrednost 2 broja. Ako je zbir ovih vbrojeva veći od 10, ispisati ga, u suprotnom ispisati njihovu razliku.


var a = 2;
var b = 10;

var zbir = a + b;
var razlika = a - b;

if(zbir > 10){
    console.log("Zbir je veci od 10, zbir je: " + zbir)
} else {
    console.log("Zbir je manji od 10, razlika brojeva je: " + razlika)
}

