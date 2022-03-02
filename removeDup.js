// Remove duplicates
// Given a sorted array of integers, remove all duplicates from the array and return an array that does not contain duplicates (okay to make a new array)

// Ex: given [1,1,1,2,3,3,4] > return [1,2,3,4]
// Ex: given [2,2,3,4,4,4] > return [2,3,4]

// Challenge one: How would you do this with an unsorted array?
// Challenge two: try to do this WITHOUT making a new array! (Also known as in place)

function removeDup(arr){
    newArr=[];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]!=newArr[newArr.length-1]){ //checking last value
            newArr.push(arr[i]); //if a new value is found, push
        }
    }
    console.log(newArr);
    return newArr;
}

removeDup([1,1,1,2,3,3,4]);