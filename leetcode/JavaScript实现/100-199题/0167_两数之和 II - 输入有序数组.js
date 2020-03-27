// 1、二分查找
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    let ans = [];

    while (left <= right) {
        if (numbers[left] + numbers[right] === target) {
            ans.push(left + 1);
            ans.push(right + 1);
            break;
        } else if (numbers[left] + numbers[right] < target) {
            ++left;
        } else {
            right--;
        }
    }

    return ans;
};