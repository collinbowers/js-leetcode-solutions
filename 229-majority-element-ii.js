/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = {}
    let majority = nums.length / 3
    let res = []
    
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]] !== undefined){
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
        if (map[nums[i]] > majority){
            if (!res.includes(nums[i])){
                res.push(nums[i])
            }
        }
    }
    return res
};
