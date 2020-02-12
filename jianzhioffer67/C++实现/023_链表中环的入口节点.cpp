/*
题目描述：
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
*/

/*
思想：
设置快慢指针，都从链表头出发，快指针每次走两步，慢指针一次走一步，假如有环，一定相遇于环中某点(结论1)。
接着让两个指针分别从相遇点和链表头出发，两者都改为每次走一步，最终相遇于环入口(结论2)。
*/

class Solution {
public:
    ListNode* EntryNodeOfLoop(ListNode* pHead) {
        ListNode *fastNode = pHead, *lowNode = pHead;
        while(fastNode && fastNode->next) {
            fastNode = fastNode->next->next;
            lowNode = lowNode->next;
            if(fastNode == lowNode)
                break;
        }
        if(!fastNode || !fastNode->next)
            return nullptr;
        lowNode = pHead; // 从慢指针出发
        while(fastNode != lowNode) {
            fastNode = fastNode->next;
            lowNode = lowNode->next;
        }
        return lowNode;
    }
};