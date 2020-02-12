// 暴力解就完事了。
var setZeroes = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (matrix[i][j] === 0 && 1 / matrix[i][j] > 0 ) {
                for (let rowI = 0; rowI < rows; ++rowI) {
                    if (matrix[rowI][j] !== 0) 
                        matrix[rowI][j] = -0;
                }
                for (let colI = 0; colI <cols; ++colI) {
                    if (matrix[i][colI] !== 0) 
                        matrix[i][colI] = -0;
                }
            }
        }
    }
    return matrix;
};
