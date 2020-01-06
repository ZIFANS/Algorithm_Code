/*
题目描述：
给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），
每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？
例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
*/

/*
思想：剑指offer书上的贪婪算法
*/

class Solution {
public:
    int cutRope(int number) {
        if(number < 2)
            return 0;
        if(number == 2) 
            return 1;
        if(number == 3)
            return 2;
        
        // 尽可能多地去剪长度为3的绳子段
        int timeOf3 = number / 3;

        // 当绳子最后剩下的长度为4时，不能再去剪长度为3的绳子段。
        // 2*2 > 3*1
        if(number - timeOf3*3 == 1) 
            timeOf3 = timeOf3 - 1;
        int timeOf2 = (number - timeOf3*3) / 2;
        return (int)pow(3, timeOf3) * (int)pow(2, timeOf2);
    }
};