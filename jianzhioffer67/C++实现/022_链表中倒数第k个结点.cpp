/*
题目描述：
输入一个链表，输出该链表中倒数第k个结点。
*/

/*
思想：设置两个指针p和q，都指向head,先让p向前移动 k-1 次，
然后p和q同时移动，最后返回q。
Notes:注意代码的鲁棒性。
*/

class Solution {
public:
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        if(pListHead == NULL || k == 0) 
            return NULL;
        ListNode *p = pListHead, *q = pListHead;
        for(unsigned int i = 0; i < k - 1; ++i) {
            if(p->next != NULL) 
                p = p->next;
            else 
            {
                return NULL;
            }
        }
        while(p->next != NULL) {
            q = q->next;
            p = p->next;
        }
        return q;
    }
};