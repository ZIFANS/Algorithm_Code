/*
题目描述：
输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
*/

/*
将链表元素插入到一个栈中，然后从栈中弹出元素
*/

class Solution {
public:
    vector<int> printListFromTailToHead(ListNode* head) {
        vector<int> ans;
        stack<ListNode*> nodes;
        ListNode *p = head;
        while(p != nullptr) {
            nodes.push(p);
            p = p -> next;
        }
        while(!nodes.empty()) {
            p = nodes.top();
            ans.push_back(p->val);
            nodes.pop();
        }
        return ans;
    }
};