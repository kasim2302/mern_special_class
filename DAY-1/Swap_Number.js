const Swap_Number = (a,b) => {
    a = a + b
    b = a - b
    a = a - b
    return [a,b]
}
console.log(Swap_Number(10,20));
