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
private:
    vector<vector<int>> ans;
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<int> temp;
        DFS(root, temp, sum);

        return ans;
    }
    void DFS(TreeNode* root, vector<int>& temp, int sum) {
        if (!root)
            return;
        
        temp.push_back(root->val);

        // 是叶子节点且从根节点到叶子节点路径总和=sum -> 符合题目的路径
        if (root->val == sum && !root->left && !root->right)
            ans.push_back(temp);
        
        DFS(root->left, temp, sum - root->val);
        DFS(root->right, temp, sum - root->val);

        // 弹出最后一个元素 用来回溯
        temp.pop_back();

    }
};
