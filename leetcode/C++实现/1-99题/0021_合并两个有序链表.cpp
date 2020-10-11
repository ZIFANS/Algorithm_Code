// 递归
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if(!l1)
            return l2;
        if(!l2)
            return l1;
        if(l1->val < l2->val)
        {
            ListNode *temp=l1;
            temp->next=mergeTwoLists(l1->next,l2);
            return temp;
        }
        else
        {
            ListNode *temp=l2;
            temp->next=mergeTwoLists(l1,l2->next);
            return temp;
        }
    }
};

// 非递归
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *dummyHead = new ListNode(-1);
        ListNode *prev = dummyHead;

        while (l1 && l2) {
            if (l1->val <= l2->val) {
                prev->next = l1;
                l1 = l1->next;
            } else {
                prev->next = l2;
                l2 = l2->next;
            }
            prev = prev->next;
        }

        // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
        prev->next = (!l1) ? l2 : l1;

        return dummyHead->next;
    }
};