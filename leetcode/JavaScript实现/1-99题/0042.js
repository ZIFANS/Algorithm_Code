// 按列求 ，算是暴力法
var trap = function(height) {
    let sum = 0;
    //最两端的列不用考虑，因为一定不会有水。所以下标从 1 到 length - 2
    for (let i = 1; i < height.length - 1; ++i) {
        let max_left = 0;
        //找出左边最高
        for (let j = i - 1; j >= 0; --j) {
            if (height[j] > max_left) {
                max_left = height[j];
            }
        }
        let max_right = 0;
        //找出右边最高
        for (let j = i + 1; j < height.length; ++j) {
            if (height[j] > max_right) {
                max_right = height[j];
            }
        }
        //找出两端较小的
        let min = Math.min(max_left, max_right);
        //只有较小的一段大于当前列的高度才会有水，其他情况不会有水
        if (min > height[i]) {
            sum += (min - height[i]);
        }
    }
    return sum;
};

// 动态规划解法
var trap = function(height) {
    let sum = 0;
    let max_left = new Array(height.length).fill(0);
    let max_right = new Array(height.length).fill(0);
    
    for (let i = 1; i < height.length - 1; ++i) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
    }
    for (let i = height.length - 2; i >= 0; --i) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    }
    for (let i = 1; i < height.length - 1; ++i) {
        let min = Math.min(max_left[i], max_right[i]);
        if (min > height[i]) 
            sum += (min - height[i]);
    }
    return sum;
};

// 双指针法。
var trap = function(height) {
    let sum = 0, max_left = 0;
    let max_right = new Array(height.length).fill(0);

    for (let i = height.length - 2; i >= 0; --i) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    }
    for (let i = 1; i < height.length - 1; ++i) {
        max_left = Math.max(max_left, height[i - 1]);
        let min = Math.min(max_left, max_right[i]);
        if (min > height[i]) {
            sum += (min - height[i]);
        }
    }
    return sum;
};
