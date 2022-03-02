function isPalindrome(str) {
    let j = str.length-1;
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i]==str[j]){
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('racecar'));