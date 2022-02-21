/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// brute force, loop through each, adding order to new array, then repopulation nums1 one with the values of the new array.
// two pointers, a and b: point a starts at m - 1 and compares it to value n - 1. if it is less than, replace the nums1[i] with the value that pointer b is looking at. 
var merge = function(nums1, m, nums2, n) {
    // set 1st pointer to the end of nums1
    let first = m - 1
    // set 2nd point to the end of nums2
    let second = n - 1
    
    // starting at the end of nums1, until we are at the beginning of nums1, decrementing
    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0){
            break
        } 
        
        //if nums1[first] is greater than nums2[second] than replace nums[1] to whatever nums1[first] was
        if (nums1[first] > nums2[second]){
            nums1[i] = nums1[first]
            first--
        } else {
            nums1[i] = nums2[second]
            second--
        }
    }
};