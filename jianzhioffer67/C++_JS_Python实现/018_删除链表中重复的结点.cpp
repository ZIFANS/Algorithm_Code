// 简单无脑的一次遍历，其实代码可以更简洁，我只是按照自己习惯，总是弄个pre和p两个指针出来。
class Solution {
public:
    ListNode* deleteNode(ListNode* head, int val) {
        ListNode* dummy = new ListNode(-1);
        dummy->next = head;

        if (!head)
            return head;
        
        ListNode* pre = dummy, *p = dummy->next;

        while (p != NULL) {
            if (p->val == val) {
                pre->next = p->next;
                break;
            } else {
                pre = p;
                p = p->next;
            }
        }

        return dummy->next;
    }
};

// 递归，这方法有点tricky 挺牛逼的
class Solution {
public:
    ListNode* deleteNode(ListNode* head, int val) {
        if (head->val == val)
            return head->next;

        head->next = deleteNode(head->next, val);

        return head;
    }
};