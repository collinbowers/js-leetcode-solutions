/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // use map and stack. map key equals to closing parentheses while value equal open parentheses
    // check to see if current is an open. Then add it to stack,
    // if its closed, check if it matches the top of the stack. If so, pop the top of the stack
    // if it doesnt match, immediately return false
    // return if length of stack is zero or not. Anything left over means its false.
    
    let map = {
        '}':'{',
        ')':'(',
        ']':'['
    }
    
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (Object.values(map).includes(s[i])){
            stack.push(s[i])
        } else {
            if (map[s[i]] !== stack[stack.length - 1]){
                return  false
            } else {
                stack.pop()
            }
        }
    }
    
    return stack.length === 0
};