//6 Napisati program koji računa srednju vrednost elemenata proizvoljnog niza brojeva.

var arr = [5, 10, 12, 14, 2, 18]
var sum = 0;

for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
var len = arr.length;
var srednjaVrednost = sum / len;
console.log(srednjaVrednost);


