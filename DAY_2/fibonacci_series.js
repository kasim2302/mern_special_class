const fibonacci = (n) => {
    let current = 0

    let prev_1 = 0
    let prev_2 = 1

    if(n<=1){
        return false
    }
    for(let i = 2 ; i <= n ;i++){
        current = prev_1 + prev_2

        prev_1 = prev_2 
        prev_2 = current
    }
    return current
}
console.log(fibonacci(7))