/*
题目描述：
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
*/

/*
思想：
*/

class Solution {
public:
    bool isNumeric(char* string) {
        bool sign = false, deciaml = false, hasE = false;
        for(int i = 0; i < strlen(string); ++i) {
            if(string[i] == 'e' || string[i] == 'E') {
                if(i == strlen(string) - 1)   // e后面一定要有数字
                    return false;
                hasE = true;
            } else if(string[i] == '+' || string[i] == '-') {
                // 第二次出现+-必须出现在e后面
                if(sign && string[i-1] != 'e' && string[i-1] != 'E' )
                    return false;
                // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
                if(!sign && i > 0 && string[i-1] != 'e' && string[i-1] != 'E')
                    return false;
                sign = true;
            } else if(string[i] == '.') {
                // e后面不能接小数点，小数点不能出现两次
                if(hasE || deciaml)
                    return false;
                deciaml = true;
            } else if(string[i] < '0' || string[i] > '9')  // 不合法字符
                return false;
        }
        return true;
    }
};