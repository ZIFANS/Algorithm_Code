// 一眼就知道是用sort,但是别人的这样代码太简洁了，借鉴了下。
var minNumber = function(nums) {
    return nums.sort((a, b) => {
        if (`${a}${b}` - `${b}${a}` > 0) {
            return 1;
        } else {
            return -1;
        }
    }).join('');
};
