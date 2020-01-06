/*
题目描述：
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
*/

/*
思想：len = str.size();
先对字符串下标为 0 到 n-1 翻转，然后对n 到 思想：len  -1 下标翻转
最后对0 到 思想：len -1 翻转
*/

// 完全自己的代码
class Solution {
public:
    string LeftRotateString(string str, int n) {
        if(str == "")
            return "";
        if(n < 1)
            return str;
        int len = str.size();
        reverse(str.begin(), str.begin() + n);
        reverse(str.begin() + n, str.end());
        reverse(str.begin(), str.end());
        return str;
    }
};