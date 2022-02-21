/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // understanding the problem
    // find the subarray that accumlates to the largest sum of the whole array. 
    // how? iterate through array, keeping track of max value and accumlated value
    
    // edge case, if nums only has one value, that is the largest sum
    if (nums.length === 1) {
        return nums[0]
    }
    
    // set max and accumulatedValue to the first integer. This will get updated as we iterate
    let max = nums[0]
    let accumulatedValue = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        // create calc, and set it to the largest of either nums[i] OR accum + nums[i]
        let calc = Math.max(nums[i], accumulatedValue + nums[i])
        
        // if calc is greated than the max value, than that is our new max
        if (calc > max) {
            max = calc
        }
        
        // calc will always be our new accumulated value
        accumulatedValue = calc
    }
    
    return max
};

// time complexity = O(N)    -> we are only iterating thru the array 1 time
// space complexity = O(1)   -> we are not adding any space to the problem. Math.max is just comparing two ints. 