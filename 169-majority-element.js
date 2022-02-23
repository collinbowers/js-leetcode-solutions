/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort(function (a, b) {
        return a - b
    })
    let majority = nums.length / 2
    let map = {}
    
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]] !== undefined){
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
        if (map[nums[i]] > majority){
            return nums[i]
        }
    }
};
