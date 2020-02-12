// 提示时间复杂度O(log n) ，所以直接用二分法就行。
var searchRange = function(nums, target) {
    let n = nums.length;
    if (n === 0)
        return [-1, -1];
    let leftSearch = () => {
        let left = 0, right = n;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (nums[mid] === target)
                right = mid;
            else if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid;
        }
        if (nums[left] !== target)
            return -1;
        return left;
    }
    let rightSearch = () => {
        let left = 0, right = n;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (nums[mid] === target)
                left = mid + 1;
            else if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid;
        }
        return left - 1;
    }
    let left = leftSearch(), right = rightSearch();
    if(left == -1) 
        return [-1,-1];
    return [left,right];
};


// 用JS自带的方法 O(n)，复杂度不符合，但是代码简单
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    let start = nums.indexOf(target), end = nums.lastIndexOf(target);
    ans[0] = start, ans[1] = end;
    return ans;
};

