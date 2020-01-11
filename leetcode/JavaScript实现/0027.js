
// 自己的代码
//如果数组里碰到相同的val，就splice掉这一项，此时数组项数就少了一个，i要往后退回一个，即i--， 结束～
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};