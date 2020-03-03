// 思想就是：第一步先转置矩阵，第二步，反转每一行。
var rotate = function(matrix) {
    let n = matrix.length; 

    // 转置矩阵
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // 反转每一行
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = temp;
      }
    }
};
