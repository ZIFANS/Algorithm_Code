// 1、回溯
/*
1、找出镜像规律
2、递归求解
3、操作二进制字符串，最后再转成10进制数字
*/
var grayCode = function(n) {
    let backtrack = (n) => {
        if (n === 0)
            return ['0'];
        if (n === 1)
            return ['0', '1'];
        
        let prev = backtrack(n - 1);
        let ans = [];
        let maxIndex = Math.pow(2, n) - 1;

        for (let i = 0, len = prev.length; i < len; ++i) {
            ans[i] = `0${prev[i]}`;
            ans[maxIndex - i] = `1${prev[i]}`;
        }

        return ans;
    };

    return backtrack(n).map((item) => {
        return parseInt(item, 2);
    });
};
