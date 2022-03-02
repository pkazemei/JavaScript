var countPositives = 0;
var countNegatives=0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
function findPositives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            countPositives+=1
        }
        else {
            countNegatives+=1;
        }
    }
    return arr;
}

console.log(findPositives(numbers));
console.log("there are " + countPositives + " positive values");
console.log("there are " + countNegatives + " negative values");