/*
题目描述：
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，
因此输出2。如果不存在则输出0。
*/

/*
思想：O(n) 方式，保存两个值，一个是数组中的一个数字，另外一个是次数。
当我们遍历到下一个数字的时候，如果下一个数字和我们之前保存的数字相同，则次数加1；
如果下一个数字的次数和我们之前保存的数字不相同，则次数减一。如果次数为0，我们需要保存下一个数字，并且把次数设置为1。
*/

class Solution {
public:
    int MoreThanHalfNum_Solution(vector<int> numbers) {
        if(numbers.size() < 0)
            return 0;
        int result = numbers[0], times = 1, len = numbers.size();

        for(int i = 1; i < len; ++i) {
            if(times == 0) {
                result = numbers[i];
                times = 1;
            } else if(numbers[i] == result) 
                ++times;
            else
                --times;
        }

        // 判断times是否大于一半
        int count = 0;
        for(int i = 0; i < len; ++i) {
            if(numbers[i] == result)
                ++count;
        }
        if(count * 2 > len)
            return result;
        return 0;
    }
};