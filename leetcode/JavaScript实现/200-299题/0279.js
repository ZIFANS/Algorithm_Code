// 自己的代码，随手也个冒泡，一次AC了。。。
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
            if (nums[i] < nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]];
                /*let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;*/
            }
        }
    }
    return nums;
};

/*
LeetCode官方题解的JS版：荷兰三色旗问题解
*/
var sortColors = function(nums) {
    let p0 = 0, cur = 0, p2 = nums.length - 1;
    let temp;
    while (cur <= p2) {
        // 交换第 p0个和第curr个元素
        // i++，j++
        if (nums[cur] === 0) {
            temp = nums[p0];
            nums[p0++] = nums[cur];
            nums[cur++] = temp;
        } else if (nums[cur] === 2) {
            // 交换第k个和第curr个元素
            // p2--
            temp = nums[cur];
            nums[cur] = nums[p2];
            nums[p2--] = temp;
        }
        else 
            cur++;
    }
};

