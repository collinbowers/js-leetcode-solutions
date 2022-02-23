/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // greedy and two pointers, starting at the edges and going inward
    // goal is max area which equals max height and width
    //
    let max = 0
    let left = 0
    let right = height.length - 1
    
    while (left < right){
        if (height[left] < height[right]){
            // set max to either max OR height of smaller multiplied by left - right (width)
            max = Math.max(max, height[left] * (right - left))
            // increment the smaller to continue on
            left += 1
        } else {
            max = Math.max(max, height[right] * (right - left))
            // decrement the right side to continue on within the boundaries
            right -= 1
        }
    }
    return max
};
