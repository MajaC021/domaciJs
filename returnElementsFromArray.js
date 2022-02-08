//10 Napisati funkciju koja za parametre uzima niz i broj i vraca sve elemente niza koji su veci od tog broja.
var arr = [ 2, 5, 7, 8, 9, 10 ]; 
var n = 6;
var allElementsBiggerN = [];

myArray(arr, n);
console.log(allElementsBiggerN);

function myArray(arr1, num){

    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] > num){
            allElementsBiggerN.push(arr1[i]);
        }
    }
    return allElementsBiggerN;
}