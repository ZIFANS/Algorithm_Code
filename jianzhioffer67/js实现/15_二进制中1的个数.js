// 自己的代码，第一想法就是位运算。
// 我想的这个解法，也就是书上的常规解法。
var hammingWeight = function(n) {
    let ans = 0
    let flag = 1;
    while (flag) {
        if (n & flag)
            ++ans;
        flag = flag << 1;
    }
    return ans;
};

// 剑指offer书上的可以给面试官代带来惊喜的解法
/*
思路：把一个整数减去1，再和原整数做与与运算，会吧整数最右边的1变为0、
那么一个整数的二进制表示中有多少个1，就可以有多少次这样的操作。
*/
var hammingWeight = function(n) {
    let ans = 0;
    while (n) {
        ++ans;
        n = (n - 1) & n;
    }
    return ans;
};