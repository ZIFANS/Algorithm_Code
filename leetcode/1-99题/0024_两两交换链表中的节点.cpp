class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if(!head || !head->next)
            return head;
        ListNode *temp=head->next;
        head->next=swapPairs(temp->next);
        temp->next=head;
        return temp;
    }
};


class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (!head || !head->next)
            return head;

        ListNode *first = head, *second = head->next;
        first->next = swapPairs(second->next); // 递归就是假设first后面的都已经处理好了
        second->next = first;// 只剩交换first和second就大功告成了，所以让second指向first

        return second;
    }
};
