
function binary2decimal(arr){
    let result = 0;
    let exp =0;
    for(var i=arr.length-1;i>=0;i--){
        if(arr.charAt(i)==1){
            exp=arr.length;
            result = Math.pow(2, exp)
        }
    }
    return result;
}


console.log(binary2decimal("11100")) //32


//1   1    0   1    0    0    1    0    0