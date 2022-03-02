
function insertionSort(arr) {
    for (let i=0; i < arr.length; i++) {
        var j=i;
        while (arr[j] < arr[j-1]) { //if left is smaller
            [arr[j], arr[j-1]]=[arr[j-1], arr[j]] //then swap right with left and left with right
            j--; //increment down to compare previous values as you increment up on the for loop
        }
    }
    return arr
}

console.log(insertionSort([5,7,2,9,1,4]))