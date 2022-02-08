//9 Napisati funkciju koja prima proizvoljni niz i neki broj n, i ispisuje elemente niza, uvećane za n, pomoću forEach .

var arr = [ 2, 5, 7 ]; 
var n = 2;
myArray(arr, n);

function myArray(arr1, num){

    arr1.forEach((item) => {
        console.log(num += item);
    });   
}