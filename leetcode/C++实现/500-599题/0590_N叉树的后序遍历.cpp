// 递归
class Solution {
private:
    vector<int> ans;
public:
    void traversal(Node* root) {
        if (!root)
            return;
        
        for (int i = 0; i < root->children.size(); ++i) {
            traversal(root->children[i]);
        }
        ans.push_back(root->val);
    }
    vector<int> postorder(Node* root) {
        ans.clear();
        traversal(root);

        return ans;
    }
};

class Solution {
public:
    vector<int> postorder(Node* root) {
        vector<int> result;
        if (root == NULL) return result;
        stack<Node*> st;
        st.push(root);
        while (!st.empty()) {
            Node* node = st.top();
            st.pop();
            result.push_back(node->val);
            for (int i = 0; i < node->children.size(); i++) { // 相对于前序遍历，这里反过来
                if (node->children[i] != NULL) {
                    st.push(node->children[i]);
                }
            }
        }
        reverse(result.begin(), result.end()); // 反转数组
        return result;
    }
};


