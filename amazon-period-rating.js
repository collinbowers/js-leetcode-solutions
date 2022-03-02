let periodRating = function (nums) {
	let n = nums.length
  
  if (n < 1){
  	return 0
  }
	
  let i = 1
  let count = 1
  let res = 0
  
  while (i < n){
  	if (nums[i] < nums[i - 1]){
    	count++
    } else {
    	res += (count * (count + 1)) / 2
      count = 1
    }
    i++
  }
  res += (count * (count + 1)) / 2
  return res
};
