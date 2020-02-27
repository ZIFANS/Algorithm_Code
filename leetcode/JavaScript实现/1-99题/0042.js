// 精选题目中别人的双指针法。
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
