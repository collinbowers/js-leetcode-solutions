/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // using set instead of a map, as sets do not allow dupes
    let map = new Set()
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])){
            return true
        } else {
            map.add(nums[i])
        }
    }
    return false
};


// time complexity:
//      the worst case scenario is that we have to iterate thru the data once.
//      o(n)

// space complexity:
//      the worst case scenario is that we have store each element once.
//      o(n)