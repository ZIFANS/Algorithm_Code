// 自己的代码
// 做过剑指offer上的题，根据数组的特点，取最右上角的数进行比较
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0)
        return false;
    let rows = matrix.length, cols = matrix[0].length;
    let row = 0, col = cols - 1;
    while(row < rows && col >= 0) {
        if(matrix[row][col] > target) 
            --col;
        else if(matrix[row][col] < target)
            ++row;
        else 
            return true;
    }
    return false;
};
