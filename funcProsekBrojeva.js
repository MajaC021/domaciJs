//7 Kreirati funkciju koja za data 3 broja racuna njihov prosek.

var zbir = 0;
var prosek = 0;
var brojac = 0;
var i = 0;

function prosekBrojeva(){

    var a = 4
    var b = 2
    var c = 5 

    while(brojac <= 2){
        zbir = a + b + c;
        brojac++;
        i++;    
     
    }   
    prosek = zbir / 3
    console.log(prosek);
}

prosekBrojeva(); 
