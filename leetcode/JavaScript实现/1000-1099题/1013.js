// 方法一，直接求
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((acc, cur) => acc + cur);
    let temp = 0, count = 0;//temp累加, count计数

    for (let i = 0; i < A.length; ++i) {
        temp += A[i];
        if (temp === Math.floor(sum / 3)) {
            ++count;
            temp = 0;
        }
        if (count === 3)
            return true;
    }
    return false;
    //return (sum !== 0 && count === 3) || (sum === 0 && count > 2);
};



// 方法二：二分法
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((acc, cur) => acc + cur);
    let left = 0, right = A.length - 1;
    let leftSum = A[left], rightsum = A[right];

    if (sum % 3 !== 0)
        return false;

    while ((left + 1) < right) {
        if (leftSum == sum/ 3 && rightsum == sum / 3) {
            return true;
        } 
        if (leftSum != sum / 3) {
            ++left;
            leftSum += A[left];
        }
        if (rightsum != sum / 3) {
            right--;
            rightsum += A[right];
        }
    }
    return false;
};
