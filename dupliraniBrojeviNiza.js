//5 Ispisati elemente proizvoljnog niza brojeva, duplirane.

var array = [1, 2, 3, 4]
var newArray = [];

for(var i = 0; i < array.length; i++){   
    newArray.push(array[i]);
    newArray.push(array[i]);
}
console.log(newArray);
