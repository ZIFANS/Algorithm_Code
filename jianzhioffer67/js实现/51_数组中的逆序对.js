// 最简单想法就是两层循环暴力解，但是肯定是不通过的。
var reversePairs = function(nums) {
    let ans = 0;

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] > nums[j]) {
                ans++;
            }
        } 
    }
    return ans;
};

// 归并的思想
var reversePairs = function(nums) {
    if (!nums || !nums.length)
        return 0;

    return mergeSort(nums, 0, nums.length - 1);
};
function mergeSort(nums, left, right) {
    if (left >= right)
        return 0;

    let mid = (left + right) >>> 1;
    let count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
    
    count += merge(nums, left, mid, right);

    return count;
}
function merge(nums, left, mid, right) {
    let i = left, j = mid + 1, c = 0, arr = [], count = 0, t = left;

    for (; j <= right; ++j) {
        while (i <= mid && nums[i] <= nums[j]) {
            arr[c++] = nums[i++];
            ++t;
        }
        count += mid - t + 1;
        arr[c++] = nums[j];
    }

    while (i <= mid) {
        arr[c++] = nums[i++];
    }

    for (let i = 0; i < arr.length; ++i) {
        nums[left + i] = arr[i];
    }
    
    return count;
}
