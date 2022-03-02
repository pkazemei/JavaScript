//https://www.rapidtables.com/convert/number/decimal-to-hex.html

const dec2hex = (num)=>{
    //hint--use this conversion string to match up the index number with the hex number for your remainders
    //hint- you will need to store remainders somewhere
    let arr = "0123456789ABCDEF"
    var rem=0;
    let converted = [];
    let remArr=[];
        while (num>0){
            num=Math.floor(num/16);
            rem=num%16;
            console.log(`${num} with remainder of ${rem}`)
        }
        for(var i=0;i<=arr.length;i++){
            arr[i]=rem;
            remArr.push[rem];
        }
        return converted;
}
console.log(dec2hex(35631)) //8B2F