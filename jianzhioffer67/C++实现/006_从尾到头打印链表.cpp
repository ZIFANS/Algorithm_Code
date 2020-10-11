/*
题目描述：
输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
*/

// 用reverse函数
class Solution {
public:
    vector<int> reversePrint(ListNode* head) {
        vector<int> ans;

        if (!head)
            return ans;

        ListNode* p = head;

        while (p) {
            ans.push_back(p->val);
            p = p->next;
        }

        reverse(ans.begin(), ans.end());

        return ans;
    }
};


// 递归
class Solution {
private:
    vector<int> ans;
public:
    vector<int> reversePrint(ListNode* head) {
        if (!head)
            return ans;
        
        reversePrint(head->next);
        ans.push_back(head->val);

        return ans;
    }
};