class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
        return test(head,NULL);
    }
private:
    TreeNode* test(ListNode *head,ListNode* tail){
        ListNode* fast=head,*slow=head;
        if(head==tail)
            return NULL;
        while(fast!=tail && fast->next!=tail){
            slow=slow->next;
            fast=fast->next->next;
        }
        TreeNode* root=new TreeNode(slow->val);
        root->left=test(head,slow);
        root->right=test(slow->next,tail);
        return root;
    }
};