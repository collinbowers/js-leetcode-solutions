/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force: nested loops adding each possible combination until a solution is found
// this solution: using a hashmap, find the complement of the current value (the value that added with current value, equals the target). if compliment value does not exist, add current value to the map and continue on. 

var twoSum = function(nums, target) {
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        // get complement 
        let complement = target - nums[i]
        // check if complement exists, if not add nums[i] and its index to the map
        if (map.has(complement)) {
            return [i, map.get(complement)]
        } else {
            map.set(nums[i], i)
        }
    }
};