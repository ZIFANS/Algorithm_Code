/*
题目描述：
统计一个数字在排序数组中出现的次数。
*/

/*
思想：第一个想法二分对了。
      第二个别人用STL库里的实现了。
*/

class Solution {
public:
    int GetNumberOfK(vector<int> data ,int k) {
        
    }
};


// 别人的
class Solution {
public:
    int GetNumberOfK(vector<int> data ,int k) {
        auto result = equal_range(data.begin(), data.end(), k);
        return result.second - result.first;
    }
};