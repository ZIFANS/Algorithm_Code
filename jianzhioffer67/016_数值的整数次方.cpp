/*
题目描述：
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0
*/

/*
思想：直接将base = 0 和 exponent = 0 的特殊情况进行讨论。
*/

class Solution {
public:
    double Power(double base, int exponent) {
        if(exponent == 0)
            return 1;
        if(base == 0)
            return 0;
        double ans = 1;
        if(exponent > 0) {
            for(int i = 0;i < exponent; ++i) {
                ans = ans * base;
            }
            return ans;
        } else {
            for(int i = 0; i < exponent*(-1); ++i) {
                ans = ans * base;
            }
            return 1.0 / ans;
        }
    }
};