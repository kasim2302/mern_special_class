const missing_number = (arr) => {
    let n = 5

    let expectedsum = (n * (n+1))/2
    let actualsum = 0

    for(let i = 0 ; i < arr.length ; i++){
        actualsum += arr[i]
    }
    return expectedsum - actualsum
}
console.log(missing_number([1,2,3,4]));
