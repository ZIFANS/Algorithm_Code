// 自己的代码
// 思想：根据数组的特点，取数组最右上角的数。
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