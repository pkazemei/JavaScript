function rotateString(str, distance) {
    var newStr = ""
    if (distance % str.length) {
        for (var j = str.length - distance; j < str.length; j++) {
            newStr += str[j];
        }
        for (var i = 0; i < str.length - distance; i++) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(rotateString("Hello world!", 2));


function isRotation(str1, str2){
    var isRotated = false;
    if(str1.length==str2.length){
        for(var i=0; i<str1.length; i++){
            tempString = rotateString(str1,i);
            if(tempString === str2){
                isRotated=true;
            }
        }
    }
    return isRotated;
}

console.log(isRotation('car', 'arc'));