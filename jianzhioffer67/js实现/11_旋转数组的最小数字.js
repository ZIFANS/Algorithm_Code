// 自己的代码，与LeetCode 154相同
// 1.抖个机灵的代码
var minArray = function(numbers) {
    return Math.min(...numbers);
};

// 2.正常的二分法 
// 这样的代码考虑到了数组中有重复数的时候
var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        let mid = (left + right) >>> 1;
        //如果中和right相同，right - 1，减少right范围
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


// 3.通过减少循环次数并且缩减循环内进行运算的方法实现高效查找
var minArray = function(numbers) {
    let i;

    for (i = 0; numbers[i] <= numbers[i + 1] && i < numbers.length; ++i);

    if (numbers[i + 1] !== undefined) {
        return numbers[i + 1];
    }

    return numbers[0];
};

