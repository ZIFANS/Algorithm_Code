// 借鉴了别人的，就是模拟下就OK 了
var spiralOrder = function(matrix) {
    if(matrix == null || !matrix.length || !matrix[0].length){
        return [];
    }
    let left = 0, right = matrix[0].length - 1,
        top = 0, bottom = matrix.length - 1;
    let ans = [];
    while(true) {
        for (let col = left; col <= right; ++col) {
            ans.push(matrix[top][col]);
        }
        ++top;
        if (top > bottom) {
            break;
        }
        for (let row = top; row <= bottom; ++row) {
            ans.push(matrix[row][right]);
        }
        --right;
        if (right < left) {
            break;
        }
        for (let col = right; col >= left; --col) {
            ans.push(matrix[bottom][col]);
        }
        --bottom;
        if (bottom < top) {
            break;
        }
        for(let row=bottom;row>=top;row--){
            ans.push(matrix[row][left]);
        }
        left++;
        if (left>right) {
            break;
        }
    }
    return ans;
};
