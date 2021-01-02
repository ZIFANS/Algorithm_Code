/*
题目描述：
给定一棵二叉搜索树，请找出其中的第k小的结点。
例如
      5 
    3，  7，
  2，4，6，8    
按结点数值大小顺序第三小结点的值为4。
*/

/*
思想：就是用非递归中序遍历的倒序，用个count记录
*/

// 完全自己代码
class Solution {
public:
    int kthLargest(TreeNode* root, int k) {
        if (!root)
            return -1;

        int count = 0;
        stack<TreeNode*> s;

        while (root || s.size()) {
            if (root) {
                s.push(root);
                root = root->right;
            } else {
                TreeNode* temp = s.top();
                s.pop();
                if (++count == k) {
                    return temp->val;
                }
                root = temp->left;
            }
        }

        return -1;
    }
};
