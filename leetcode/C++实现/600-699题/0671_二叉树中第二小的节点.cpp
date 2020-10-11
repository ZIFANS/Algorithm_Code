class Solution {
public:
    void DFS(TreeNode* root, set<int> &s) {
        if (!root)
            return;
        
        s.insert(root->val);
        DFS(root->left, s);
        DFS(root->right, s);
    }
    int findSecondMinimumValue(TreeNode* root) {
        set<int> s;
        DFS(root, s);

        set<int>::iterator it;
        it = ++s.begin();   // 相当于取到了第二个数

        if (it == s.end()) {    
            return -1;         
        } else {
            return *it;
        }
    }
};