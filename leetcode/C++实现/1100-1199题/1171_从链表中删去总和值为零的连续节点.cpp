/*
递归：分为2部分，头元素和待删去总和值为零的链表，从头开始累加和，
返回累加和为零的最后一个元素的next记为结果链表的首节点
*/
class Solution {
public:
    ListNode* removeZeroSumSublists(ListNode* head) {
        if (!head) {
            return NULL;
        }

        ListNode *Next = removeZeroSumSublists(head->next);
        head->next = Next;
        ListNode *temp = head;
        long long value = 0;

        while (temp) {
            value += temp->val;

            if (value == 0) {
                return temp->next;
            }

            temp = temp->next;
        }

        return head;
    }
};

/*
评论区中他人的想法
我们可以考虑如果给的入参不是链表是数组的话，只需要求出前缀和，对于前缀和相同的项，
那他们中间的部分即是可以消除掉的，比如以 [1, 2, 3, -3, 4] 为例，其前缀和数组为 [1, 3, 6, 3, 7] ，
我们发现有两项均为 3，则 6 和 第二个 3 所对应的原数组中的数字是可以消掉的。
换成链表其实也是一样的思路，把第一个 3 的 next 指向第二个 3 的 next 即可
*/
// 下次用代码再实现下这个思路