/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //     let xStr = x.toString()
    //     let reversed = ''
    
    //     for (let i = 0; i < xStr.length; i++){
    //         reversed = xStr[i] + reversed
    //     }
    //     return (reversed === xStr)
        let revStr = x.toString().split("").reverse().join("")
        return (x.toString() === revStr)
};