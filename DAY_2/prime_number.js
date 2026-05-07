const primeNumber = (num) => {
    if(num < 1){
        return false
    }
    for(let i = 2 ; i <= num ; i++){
        if(num % i === 0){
            return "Not a prime number"
        }
    }
    return "Prime Number"
}
console.log(primeNumber(9));
