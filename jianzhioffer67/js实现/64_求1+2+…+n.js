// 自己的代码，第一想法：递归
var sumNums = function(n) {
    n && (n += sumNums(n - 1));
    return n;
};
