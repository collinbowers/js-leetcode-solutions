/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    
    if (s.length === 0 || s === 0){
        return 0
    }
    // take each roman numeral and get it's value from the map map[s[i]]. Then IF current numeral is less than          the next numeral, subtract teh current numeral from our result. Else, add it to our result.
    // Example:
    // IV
    // 1 < 5
    // 0(result) - 1 = -1
    // -1 + 5 (V) = 4.
    for (let i = 0; i < s.length; i++){
        if (map[s[i]] < map[s[i + 1]]){
            result -= map[s[i]]
        } else {
            result += map[s[i]]
        }
    }
    return result
};
