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
思想：就是用非递归中序遍历，用个count记录
*/

// 完全自己代码
class Solution {
public:
    TreeNode* KthNode(TreeNode* pRoot, int k) {
      if(pRoot == nullptr)
        return nullptr;
      stack<TreeNode*> s;
      TreeNode *p = pRoot;
      int count = 0;
      while(p || !s.empty()) {
        while(p) {
          s.push(p);
          p = p->left;
        }
        if(!s.empty()) {
          p = s.top();
          ++count;
          if(count == k)
            return p;
          s.pop();
          p = p->right;
        }
      }
      return nullptr;
  }   
};