/*
题目描述：
输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
*/

/*
思想：
*/

//自己的代码 最烂的方法 排序 时间复杂度 O(nlogn);
class Solution {
public:
    vector<int> GetLeastNumbers_Solution(vector<int> input, int k) {
        vector<int> ans;
        int len = input.size();
        if(len == 0 || k < 0 || k > len)
            return ans;
        sort(input.begin(), input.end());
        for(int i = 0; i < k; ++i) {
            ans.push_back(input[i]);
        }
        return ans;
    }
};