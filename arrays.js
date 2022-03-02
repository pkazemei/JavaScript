// Could we determine if a certain value was present? 
// Write a function called isPresent2d(arr2d, value) 
// that returns true if the value is present and false otherwise
// Note - Don't assume the array will always be the same size, we must rely on its .length property
// Hint - Can we put a for loop inside another for loop?

var arr2d =
    [[2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]];

function isPresent2d(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent2d(arr2d, 10));

// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values 
// from inside the sub-arrays. 
// Don't assume the array will always be the same size, or that the sub-arrays are all the same length 
// (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use 
// .push(value) and/or .pop() where needed.

// complete the following function

function flatten(arr) {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        for(var j= 0; j < arr[i].length; j++){
            flat.push(arr[i][j]);
        }
    }
    return flat;
}
var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]