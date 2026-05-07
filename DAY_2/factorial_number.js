const factorial  = (n) => {
    let fact = 1
    if(n<1){
        return false
    }

    for(let i = 2 ; i <= n ; i++ ){
        fact *= i
    }
    return fact
}
console.log(factorial(5));
