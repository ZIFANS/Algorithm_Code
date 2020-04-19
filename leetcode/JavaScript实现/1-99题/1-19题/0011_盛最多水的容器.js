// 自己的代码
// 第一想法就是暴力解, 一次AC。
var maxArea = function(height) {
    let len = height.length, ans = 0;

    for (let i = 0; i < len; ++i) {
        let temp = 0;
        for (let j = i + 1; j < len; ++j) {
            temp = (height[i] < height[j] ? height[i] : height[j]) * (j - i);
            if (temp > ans)
                ans = temp;
        }
    }
    return ans;
};

// 暴力解还是太辣鸡了，换双指针 一次遍历
/*
这种方法背后的思路在于，两线段之间形成的区域总是会受到其中较短那条长度的限制。
此外，两线段距离越远，得到的面积就越大。

我们在由线段长度构成的数组中使用两个指针，一个放在开始，一个置于末尾。 
此外，我们会使用变量 maxareamaxarea 来持续存储到目前为止所获得的最大面积。 
在每一步中，我们会找出指针所指向的两条线段形成的区域，
更新 maxareamaxarea，并将指向较短线段的指针向较长线段那端移动一步。
*/
var maxArea = function(height) {
    let maxarea = 0, left = 0, right = height.length - 1;

    while (left < right) {
        maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * (right - left));

        if (height[left] < height[right])
            ++left;
        else 
            --right;
    }

    return maxarea;
};