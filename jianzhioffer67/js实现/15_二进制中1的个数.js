// 1.位运算常规解法
/*
首先将n和1做与运算，判断n的最低位是不是为1。接着把1左移一位得到2，再和n做与算法
反复左移
*/
var hammingWeight = function(n) {
    let ans = 0;
    let flag = 1;

    while (flag) {
        if (flag & n) 
            ++ans;
        flag = flag << 1;
    }

    return ans;
};

// 2.位运算 稍微好点得想法
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