/*
题目描述：
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
*/

/*
思想：
把已经得到的数列中间项保存起来，在下次需要的时候我们先查找以下，如果前面已经计算过就不用重复计算了。
根据f(0)和f(1) 得出f(2),以此类推。
*/

class Solution {
public:
    int Fibonacci(int n) {
        int result[2] = {0, 1};
        if(n < 2) 
            return result[n];
        int fibOne = 1;
        int fibTwo = 0;
        int fibN = 0;
        for(int i = 2; i <= n; ++i) {
            fibN = fibOne + fibTwo;
            fibTwo = fibOne;
            fibOne = fibN;
        }
        return fibN;
    }
};