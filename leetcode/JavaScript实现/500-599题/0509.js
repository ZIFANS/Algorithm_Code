// 自己代码 
/*
思想：
递归效率太低了，我们只要吧已经得到的数列中间项保存起来，在下次需要计算的时候我们先查找以下，如果前面已经计算过，
就不需要重复计算。 从下往上算，f(0), f(1), 算出f(2)。
*/
var fib = function(N) {
    let ans = [0, 1];
    if (N < 2)
        return ans[N];
    let one = 1, two = 0, fibN = 0;
    for (let i = 2; i <= N; ++i) {
        fibN = one + two;
        two = one;
        one = fibN;
    }
    return fibN;
};