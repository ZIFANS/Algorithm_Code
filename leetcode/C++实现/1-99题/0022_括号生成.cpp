class Solution {
public:
    vector<string> generateParenthesis(int n) {
        int left = 0, right = 0;
        vector<string> ans;

        backtrack(ans, "", n, left, right);
        
        return ans;
    }
    void backtrack(vector<string> &res, string path, int n, int left, int right) {
        if (right > left || left > n || right > n)
            return;
        if (left == right && left == n) {
            res.push_back(path);
            return;
        }
        backtrack(res, path + '(', n, left + 1, right);
        backtrack(res, path + ')', n, left, right + 1);
    }
};

