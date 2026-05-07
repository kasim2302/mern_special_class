const words_count = (str) => {
    let count = {}
    let words = str.split(" ")

    for(let char of words){
        if(count[char]){
            count[char] += 1
        }
        else{
            count[char] = 1
        }
    }
    return count

}
console.log(words_count("i want to work with these people to amalyze them."))