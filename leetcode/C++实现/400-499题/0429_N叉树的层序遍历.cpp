// 其实就是二叉树的层序遍历一样的思想， 没啥特别的
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        queue<Node*> q;
        vector<vector<int>> ans;

        if (root)
            q.push(root);
        
        while (!q.empty()) {
            int size = q.size();
            vector<int> level;      // level记录每一层的所有节点

            for (int i = 0; i < size; ++i) {
                Node* temp = q.front();
                q.pop();    
                level.push_back(temp->val);     

                for (int j = 0; j < temp->children.size(); ++j) {
                    if (temp->children[j])
                        q.push(temp->children[j]);
                }
            }

            ans.push_back(level);
        }

        return ans;
    }
};