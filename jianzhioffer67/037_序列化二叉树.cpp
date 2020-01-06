/*
题目描述：
请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，
从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。

二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
*/

/*
思想：没啥思想 简单
*/
class Solution {
public:
    char* Serialize(TreeNode *root) {    // 序列化
        if(root == nullptr)
            return nullptr;
        string str;
        Serialize(root, str);
        int len = str.size();
        char *ans = new char[len + 1];
        int i;
        for(i = 0; i < len; ++i) {
            ans[i] = str[i];
        }
        ans[i] = '\0';
        return ans;
    }
    void Serialize(TreeNode *root, string& str) {
        if(root == nullptr) {
            str += '#';
            return;
        }
        string r = to_string(root->val);
        str += r;
        str += ',';
        Serialize(root->left, str);
        Serialize(root->right, str);
    }
    TreeNode* Deserialize(char *str) {      // 反序列化
        if(str == nullptr)
            return nullptr;
        TreeNode *ans = Deserialize(&str); //在递归时，递归函数的参数一定要是char ** ，这样才能保证每次递归后指向字符串的指针会
                                            //随着递归的进行而移动！！！)
        return ans;
    }
    TreeNode* Deserialize(char **str) {
        if(**str == '#') {
            ++(*str);
            return nullptr;
        }
        int num = 0;
        while(**str != '\0' && **str != ',') {
            num = num * 10 +((**str) - '0');
            ++(*str);
        }
        TreeNode *root = new TreeNode(num);
        if(**str == '\0')
            return root;
        else
            (*str)++;
        root->left = Deserialize(str);
        root->right = Deserialize(str);
        return root;
    }
};