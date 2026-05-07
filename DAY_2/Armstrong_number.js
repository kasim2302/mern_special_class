const Armstrong_number = (num) => {
    let temp = num
    let sum = 0

    let digits = num.toString().length
    
    while(temp>0){
        let digit = temp % 10
        sum += digit ** digits
        temp = Math.floor(temp/10)
    }
    return sum === num ? "Armstrong Number" : "Not armstrong number"
}
console.log(Armstrong_number(1634));
