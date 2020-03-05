// 先排序，然后求差值数和数组中0的个数、
// 时间复杂度 O(nlogn)
var isStraight = function(nums) {
    let len = nums.length;

    nums.sort((a, b) => {
        return a - b;
    });
    
    let zeroNum = 0, del = 0;

    for (let num of nums) {
        if (num === 0) 
            ++zeroNum;
    }

    for (let index = zeroNum; index < len - 1; ++index) {
        if (nums[index] === nums[index + 1])
            return false;
        del += nums[index + 1] - nums[index];
        ++zeroNum;
    }
    return zeroNum >= del ? true : false;
};
