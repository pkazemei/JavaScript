function bubbleSort(arr){
    for(var j=0;j<arr.length;j++){
        for(var i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]]=[arr[i+1], arr[i]]
            }
        }
    }
    console.log(arr);
}

bubbleSort([6,4,5,2,9,3,8])