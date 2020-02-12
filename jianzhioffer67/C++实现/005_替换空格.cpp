/*
题目描述：
    请实现一个函数，将一个字符串中的每个空格替换成“%20”。
    例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
*/

/*
思想：
遍历一次字符串，统计空格的总数，计算出替换后字符串总长度。

从字符串后面开始复制和替换，首先准备两个指针，p1，p2，p1指向原始字符串末尾，p2指向替换后字符串末尾，p1指向的字符不为空，复制到p2所在的位置，之后两者向前移动一个位置。

为空时，p2插入字符串%20，向前移动三个位置，p1向前移动一个位置，直到p1p2指向同一个位置或者p1遍历了所有的字符。
*/

class Solution {
public:
	void replaceSpace(char *str,int length) {
        int i = 0, pastlength = 0, afterlength, k,spacelength = 0;
        while(str[i] != '\0') {
            pastlength++;
            if(str[i] == ' ')
                spacelength++;
            i++;
        }
        afterlength = pastlength + spacelength * 2;
        if(afterlength > length)
            return;
        int j = afterlength;
        for(i = pastlength; i >=0 && j > i; i--) {
            if(str[i] != ' ')
                str[j--] = str[i];
            else {
                str[j--] = '0';
                str[j--] = '2';
                str[j--] = '%';
            }
        }
	}
};

