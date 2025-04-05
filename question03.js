function getMaxValueFromDigits(num){
    if(num<10){
        console.log("Number must have at least 2 digits.");
        return null;
    }
    let maxNum=parseInt(num.toString().split('').sort((a,b)=>b-a).join(''));
    return maxNum;
}
console.log(getMaxValueFromDigits(215));
console.log(getMaxValueFromDigits(1093));