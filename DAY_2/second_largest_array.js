const secondLargest = (arr) => {
    let largest = -Infinity
    let secondlargest = -Infinity

    for(let i = 0 ; i <= arr.length ; i++){
        if(arr[i] > largest){
            secondlargest = largest
            largest = arr[i]
        }
        else if(arr[i] > secondlargest && arr[i] !== largest){
            secondlargest = arr[i]
        }
    }
    return secondlargest
}
console.log(secondLargest([23,65,12,34,54,60]));
