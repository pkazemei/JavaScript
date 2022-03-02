function reverseString(str) {
    let output = '';
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return(output);
}
console.log(reverseString("Hello"));
console.log(reverseString("12345"));
console.log(reverseString("Welcome"));