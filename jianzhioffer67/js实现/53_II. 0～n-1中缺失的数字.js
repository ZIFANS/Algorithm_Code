// 自己的代码，二分法
var missingNumber = function(nums) {
    let len = nums.length;
    let left = 0, right = len - 1;
    while (left <= right) {
        let mid = (left + right) >>> 1;
        if (nums[mid] !== mid) {
            if (mid === 0 || nums[mid - 1] === mid - 1)
                return mid;
            right = mid - 1;
        }
        else 
            left = mid + 1;
    }
    if (left === len)
        return len;
    return -1;
};