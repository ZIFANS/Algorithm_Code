// 1、使用额外数组
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (!head)
            return true;

        vector<int> listVal;
        
        while (head) {
            listVal.push_back(head->val);
            head = head->next;
        }

        int len = listVal.size();

        for (int i = 0; i < len / 2; ++i) {
            if (listVal[i] != listVal[len - i - 1]) {
                return false;
            }
        }

        return true;
    }
};

// 2、不使用额外数组
