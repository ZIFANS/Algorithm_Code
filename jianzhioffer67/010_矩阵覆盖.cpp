/*
题目描述：
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
*/

/*
思想：
特殊的target=0时输出0，其他时候还是斐波那契递归。
一个2*n的矩形，可以分为两种方式填充
1、2*(n-1)  + 2*1 ，此时只要把RectCover(n-1)的那种，再拼接一个竖的2*1的就可以了，方法数目为RectCover(n-1)
2、2*(n-1) + 2*2，此时2*2可以看成横着放两个1*2，或者竖着放两个2*1，但是其中竖的的正好是方法1的方式，故只算上横的即可，方法数目为RectCover（n-2）
*/

class Solution {
public:
    int rectCover(int number) {
        int result[3] = {0, 1, 2};
        if(number <= 2)
            return result[number];
        return rectCover(number - 1) + rectCover(number - 2);
    }
};