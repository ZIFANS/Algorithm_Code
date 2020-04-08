// 1、通过翻转
var rotate = function(matrix) {
    let rows = matrix.length;

    // 水平翻转
    for (let i = 0; i < Math.floor(rows / 2); ++i) {
        for (let j = 0; j < rows; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[rows - i - 1][j];
            matrix[rows - i - 1][j] = temp;
        }
    }

    // 主对角线翻转
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < i; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};