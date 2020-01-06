/*
题目描述：
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
如果有多对数字的和等于S，输出两个数的乘积最小的。

对应每个测试案例，输出两个数，小的先输出。
*/

/*
思想：因为是递增的，第一想法就是双指针。
*/

class Solution {
public:
    vector<int> FindNumbersWithSum(vector<int> array,int sum) {
        vector<int> ans;
        int len = array.size(), i = 0, j = len - 1;

        while(i < j) {
            if(array[i] + array[j] == sum) {
                ans.push_back(array[i]);
                ans.push_back(array[j]);
                break;
            }
            while( i < j && array[i] + array[j] > sum)
                --j;
            while(i < j && array[i] + array[j] < sum)
                ++i;
        }
        return ans;
    }
}; 