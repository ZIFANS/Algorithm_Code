// 自己的代码，剑指offer上做过。
// 第一想法就是位运算
var hammingWeight = function(n) {
    let ans = 0;
    while(n) {
        ++ans;
        n = (n - 1) & n;
    }
    return ans;
};

// 第二种解法，也是基于位运算
var hammingWeight = function(n) {
    let ans = 0;
    let flag = 1;
    while(flag) {
        if(n & flag)
            ++ans;
        flag = flag << 1;
    }
    return ans;
};
