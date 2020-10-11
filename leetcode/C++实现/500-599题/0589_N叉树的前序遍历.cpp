// 递归
class Solution {
private:
    vector<int> ans;
public:
    vector<int> preorder(Node* root) {
        if (!root)
            return ans;

        ans.push_back(root->val);

        for (auto i : root->children) {
            preorder(i);
        }

        return ans;
    }
};

// 迭代
class Solution {
public:
    vector<int> preorder(Node* root) {
        vector<int> ans;
    
        if (!root)
            return ans;
        
        stack<Node*> s;
        s.push(root);

        while (!s.empty()) {
            Node* temp = s.top();
            s.pop();
            ans.push_back(temp->val);

            for (int i = temp->children.size() - 1; i >= 0; --i) {
                s.push(temp->children[i]);
            }
        }

        return ans;
    }
};
