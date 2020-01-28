//思路是判断如果不是该列数组的首位或者最后一位，则值为a[i-1][j-1] + a[i-1][j] ，否则值为1
var generate = function(numRows) {
    let ans = [];
    if(numRows <= 0)
        return ans;
    for(let i = 0; i < numRows; ++i) {
        let temp = [];
        for(let j = 0; j <= i; ++j) {
            if(j > 0 && j < i) {
                temp.push(ans[i - 1][j - 1] + ans[i - 1][j]);
            } else {
                temp.push(1);
            }
        }
        ans.push(temp);
    }
    return ans;
};
