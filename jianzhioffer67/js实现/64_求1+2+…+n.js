// 自己的代码，第一想法：递归
var sumNums = function(n) {
    if (n === 1)
        return 1;
    return n + sumNums(n - 1);
};