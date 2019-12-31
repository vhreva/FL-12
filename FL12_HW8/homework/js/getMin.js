function getMin() {
  let nums = arguments[0];

  for (let i = 1; i <= arguments.length; i++) {
    if (nums > arguments[i]) {
        nums = nums[i];
    }
  }
  return nums;
}

getMin(3, 0, -3); 
