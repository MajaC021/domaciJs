// 10 Napisati funkciju koja kao parametar uzima niz, a vraca sumu elemenata tog niza.

var arr = [ 5, 5, 7 ]; 
var sum = 0;

myArray(arr);
console.log(sum);

function myArray(arr1){

    for(var i = 0; i < arr1.length; i++){
    sum += arr1[i];
    }
    return sum;
}