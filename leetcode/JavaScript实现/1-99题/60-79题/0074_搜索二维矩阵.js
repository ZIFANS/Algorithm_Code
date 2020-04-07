// 1、根据该矩阵的特点
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0)
        return false;
    // 取数组最右
    let rows = matrix.length, cols = matrix[0].length;
    let row = 0, col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            --col;
        } else {
            ++row;
        }
    }

    return false;
};