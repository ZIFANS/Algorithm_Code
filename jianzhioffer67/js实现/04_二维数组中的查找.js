// 自己的代码,与 LC 240题目相同
// 1.暴力,时间复杂度O(n ^ 2)


// 2.思想：根据数组的特点，取数组最右上角(或最下角)的数。
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length === 0)
        return false;

    let rows = matrix.length, cols = matrix[0].length;
    let row = 0, col = cols - 1; // 取数组最右上角的数，进行比较

    while (row < rows && col >= 0) {
        if (matrix[row][col] < target) {
            ++row;
        } else if (matrix[row][col] > target) {
            --col;
        } else {
            return true;
        }
    }

    return false;
};


/*
3.先用toString将矩阵转化为字符串 "1,4,7,11,15,2,5,8,12,19,3,6,9,16,22,10,13,14,17,24,18,21,23,26,30"
然后用split分隔为一维数组
然后使用includes查找target
*/
var findNumberIn2DArray = function (matrix, target) {
    return matrix.toString().split(',').includes(target.toString())
};


