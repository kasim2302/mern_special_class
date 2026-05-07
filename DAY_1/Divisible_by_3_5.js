const isDivisible = (n) => {
    for(let i = 1 ; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i)
        }
    }
}
isDivisible(50)