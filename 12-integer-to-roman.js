/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    let res = ""
    let keys = Object.keys(map)
    
    // as long as num is not zero, go through each key value pair from bottom to top
    // if num - key is not negative, then subtract key from num, and add the key to the result, break out of          that conditional
    while (num !== 0){
        for (let i = keys.length - 1; i >= 0; i--) {
            let key = keys[i]
            if (num - key >= 0){
                num -= key
                res += map[key]
                break
            }
        }
    }
    return res
};
