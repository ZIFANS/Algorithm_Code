/*
题目描述：
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
所有的偶数位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。
*/

/*
思想：
一个很容易理解的解法，时间复杂度为o^2
我们可以借鉴冒泡排序的特点，让偶数不断向右边移动，而冒泡的过程本身也可以保证相对顺序的不变,最后所有的偶数都移动到了右边，最坏情况下外层循环需要进行array.size()次。
*/

class Solution
{
public:
    void reOrderArray(vector<int> &array)
    {
        int loop = array.size();
        while (loop--)
        {
            bool change = false;
            for (int i = 0; i < array.size() - 1; i++)
            {
                if (array[i] % 2 == 0 && array[i + 1] % 2 == 1)
                {
                    swap(array, i, i + 1);
                    change = true;
                }
            }
            if (!change)
            {
                return;
            }
        }
    }
 
    void swap(vector<int> &array, int i, int j)
    {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};