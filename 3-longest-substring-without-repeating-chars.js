/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // use a map to track unique chars
    // use sliding window to track the max sub string length
    // update the starting point when ever a duplicate is found
//     let map = {}
//     let start = 0
//     let maxLength = 0
    
//     for (let end = 0; end < s.length; end++) {
//         let lastChar = s[end]
//         if (map[lastChar] === undefined){
//             map[lastChar] = 0
//         }
//         map[lastChar] += 1
//         while (map[lastChar] > 1){
//             let firstChar = s[start]
//             map[lastChar] -= 1
//             start += 1
//         }
//         maxLength = Math.max(maxLength, end - start + 1)
//     }
//     return maxLength
    
    // sliding window with SET instead of map
    let set = new Set()
    let max = 0
    let i = 0       // two pointers. Whenever s[i] is repeated, delete s[j] from set and increment j (second pointer)
    let j = 0
    
    if (s == null || s.length == 0){
        return 0
    }
    
    while (i < s.length){
        let c = s[i]
        while (set.has(c)){
            set.delete(s[j])
            j++
        }
        set.add(c)
        max = Math.max(max, i - j + 1)
        i++
    }
    return max
};