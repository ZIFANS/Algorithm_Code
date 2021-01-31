/*
题目描述：
输入一个字符串,按字典序打印出该字符串中字符的所有排列。
例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
*/

/*
思想：递归
*/

class Solution {
public:
    vector<string> Permutation(string str) {
        vector<string> ans;
        if(str.size() == 0)
            return ans;
        Permutation(ans, str, 0);
        sort(ans.begin(), ans.end());
        return ans;
    }
    void Permutation(vector<string> &v, string str, int begin) {
        if(begin == str.size() -1) {
            v.push_back(str);
        }
        for(int i = begin; i <= str.size() - 1; ++i) {
            if(i != begin && str[i] == str[begin])
                continue;
            swap(str[i], str[begin]);
            Permutation(v, str, begin + 1);
            swap(str[i], str[begin]);
        }
    }
};