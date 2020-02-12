//  自己的代码
// 1、第一步数组翻转
// 2、第二步将1-k个元素翻转， k + 1

// 后面发现不需要这么麻烦
var rotate = function(nums, k) {
    // k %= nums.length
    for(var i = 0; i < k; i ++){
        nums.unshift(nums.pop()); //先把元素从最末尾取出来之后，再放到最前面
    }
};
