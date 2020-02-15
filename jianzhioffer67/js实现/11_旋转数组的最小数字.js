// 自己的代码
// 抖个机灵的代码
var minArray = function(numbers) {
    return Math.min(...numbers);
};

// 正常的二分法 
// 这样的代码考虑到了数组中有重复数的时候
var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        //算中间值
        let mid = (left + right) >>> 1;
        //如果中值大于right值，说明left那边元素比较大，缩小范围
        if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        //如果中和right相同，right - 1，减少right范围
        } else if (numbers[mid] === numbers[right]) {
            right = right - 1;
        } else {
            //如果right值大，说明left是最小区间
            right = mid;
        }
    }
    //此时只剩一个了 left和right都可以
    return numbers[left];
};