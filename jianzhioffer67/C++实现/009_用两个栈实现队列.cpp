/*
题目描述：
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
*/

/*
思想：
每次push都向一个栈如stack1中push, 当要pop时候，看stack1是否为空，
如果stack2为空，则把stack1一个个pop出来，然后push到stack2中，最后弹出stack2栈顶
如果stack2非空，则直接将stack2中的栈顶元素pop
*/

class Solution
{
public:
    void push(int node) {
        stack1.push(node);
    }

    int pop() {
        int ans;
        if(stack2.size() <= 0) {
            while(stack1.size() > 0) {
                int temp = stack1.top();
                stack1.pop();
                stack2.push(temp);
            }
        } 
        ans = stack2.top();
        stack2.pop();
        return ans;
    }

private:
    stack<int> stack1;
    stack<int> stack2;
};