/*
题目描述：
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
(注意: 在返回值的list中，数组长度大的数组靠前)
*/

/*
思想：
（1）首先该题是基于递归去遍历整棵树，遍历完每一条路径，遍历的顺序是先根节点，然后是左节点，接着是右节点；
（2）如果节点的左右子树都为空，且路径之和等于参数，就说明该路径是需要输出的
（3）如果不满足条件，在遍历完之后需要把最后一颗节点弹出来。
*/

class Solution {
public:
    vector<vector<int> > FindPath(TreeNode* root,int expectNumber) {
        if(root == nullptr)
            return ans;
        DFS(root, expectNumber);
        return ans;
    }
    void DFS(TreeNode *root, int expectNumber) {
        temp.push_back(root->val);
        if(expectNumber - root->val == 0 && root->left == nullptr && root->right == nullptr) {
            ans.push_back(temp);
        } else {
            if(root->left != nullptr)
                DFS(root->left, expectNumber - root->val);
            if(root->right != nullptr)
                DFS(root->right, expectNumber - root->val);
        }
        temp.pop_back();
    }
private:
    vector<vector<int>> ans;
    vector<int> temp;
};