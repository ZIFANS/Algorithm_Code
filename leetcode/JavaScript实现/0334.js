// 自己的代码，直接O(n ^ 2) 非常辣鸡的时间复杂度。
var increasingTriplet = function(nums) {
    let flag = false;
    for (let i = 0; i < nums.length; ++i) {
        let ans = 1;
        let temp = nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] < nums[j] && temp < nums[j]) {
                ++ans;
                temp = nums[j];
            } else if (nums[i] < nums[j] && temp >= nums[j]) {
                temp = nums[j];
                ans = 2;
            }
            if (ans === 3) {
                flag = true;
                break;
            }
        }
    }
    return flag;
};

// 题解中看到一种巧妙的方法，就是不断更新三个数。
var increasingTriplet = function(nums) {
    const INF = Number.MAX_VALUE;
    let n1 = INF, n2 = INF, n3 = INF;
    for (let x of nums) {
        if (x < n1) {
            n1 = x;
        } else if (x !== n1 && x < n2) {
            n2 = x;
        } else if (x !== n1 && x !== n2 && x < n3) {
            n3 = x;
        }
        if (n1 < n2 && n2 < n3 && n3 <INF) {
            return true;
        }
    }
    return false;
 };
 