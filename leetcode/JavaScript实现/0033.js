// 题目提示只能O(log n)，所以第一想法就是二分。
// 但是自己没有AC掉，所以看了别人的代码。
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >>> 1 ; 
        if (nums[mid] === target)
            return mid;
        /***
        * 如果中间的数小于最右边的数，
        * 则右半段是有序的，
        * 若中间数大于最右边数，
        * 则左半段是有序的
        * */
        if (nums[mid] < nums[right]) {
        /**
         * 有序的半段里用首尾两个数组来判断目标值是否在这一区域内，
        *  这样就可以确定保留哪半边了
        */
            if(nums[mid] < target && nums[right] >= target) 
                left = mid + 1; 
            else 
                right = mid -1;
        } else {
            if(nums[mid] > target && nums[left] <= target) 
                right = mid - 1;
            else 
                left = mid + 1;
        }
    }
    return -1;
};