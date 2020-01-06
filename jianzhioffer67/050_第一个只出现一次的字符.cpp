/*
题目描述：
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
并返回它的位置, 如果没有则返回 -1（需要区分大小写）
*/

/*
思想：就是开辟一个数组，第一次遍历先记录下每个字符的次数
      第二次遍历就是将出现一次的字符返回
*/


// 自己代码
class Solution {
public:
    int FirstNotRepeatingChar(string str) {
        int len = str.size();
        if(len == 0)
            return -1;
        unsigned  int a[256] = {0};
        //memset(a, 0, 256);
        for(int i = 0; i < len; ++i) {
            a[str[i] - '0']++;
        }
        for(int i = 0; i < len; ++i) {
            if(a[str[i] -'0'] == 1)
                 return i;
        }
        return -1;
    }
};