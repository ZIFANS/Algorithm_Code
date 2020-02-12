// 第一想法就是双指针，想法没错。
// 就是一直没AC，借鉴了别人的代码
var threeSum = function(nums) {
    let ans = [];
    let len = nums.length;
    if(nums === null || len < 3) return ans;
    nums.sort((a, b) => {
        return a - b;
    });
    for(let i = 0; i < len; ++i) {
        if(nums[i] > 0)  break;                 // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] === nums[i - 1])            // 去重
            continue;
        let L = i + 1;
        let R = len - 1;
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if(sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] === nums[L + 1])     // 去重
                    L++;
                while(L < R && nums[R] === nums[R - 1])     // 去重
                    R--;
                L++;
                R--;
            }
            else if(sum < 0)
                L++;
            else if(sum > 0)
                R--;
        }
    }
    return ans;
};
