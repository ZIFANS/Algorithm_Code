// 自己20多秒直接写出暴力的一次AC。
// 其实每次暴力法都是想看看能通过几个测试用例
var countSmaller = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; ++i) {
        let temp = 0;
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] > nums[j]) 
                ++temp;
        }
        ans.push(temp);
    }
    return ans;
};

// 另外一种想法。
