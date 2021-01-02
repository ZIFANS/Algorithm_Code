/*
题目描述：
将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 
数值为0或者字符串不是一个合法的数值则返回0

输入描述：输入一个字符串,包括数字字母符号,可以为空
输出描述：如果是合法的数值表达则返回该数字，否则返回0

*/

/*
思想:
注意输入数据的合法性，例如“1234+12”，“12@@#*24”，这样的都是不合法数值，要返回0的。
但是如果第一个字符时+或-时是可以的，且影响最后输出的符号，最后还要判断下数字是否超出了范围。
*/

class Solution {
public:
    int StrToInt(string str) {
        int len = str.size();
        if(len == 0)
            return 0;
        long long num = 0;
        bool tag = true;
        if(str[0] == '-') 
            tag = false;
        for(int i = (str[0] == '+' || str[i] == '-' ? 1 : 0); i < len; ++i) {
            if(str[i] >= '0' && str[i] <= '9') {
                num = num * 10 + (str[i] - '0');
            } else{
                num = 0;
                break;
            }
        }
        num = tag ? num : -num;
        if(num > INT_MAX || num < INT_MIN)
            return 0;
        return (int) num;
    }
};