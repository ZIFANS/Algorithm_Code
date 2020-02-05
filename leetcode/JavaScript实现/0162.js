var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.trunc( (right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
