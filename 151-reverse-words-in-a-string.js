/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    //split out string into an array of words
    let words = s.split(" ")
    let solution = ""
    // iterate through array of words, starting from the end, adding each words to the solution string
    // using concat 
    for(let i = words.length - 1; i >= 0; i--){
        // check if blank spaces exist, if so remove them from the array
        if(words[i] == ""){
            words.splice(i, 1)
        } else {
            solution = solution.concat(words[i], " ")
        }
    }
    // returns solution
    return solution.trimEnd()
};