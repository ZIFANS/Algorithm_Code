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

class CQueue {
    stack<int> stack1,stack2;
public:
    CQueue() {
        
    }
    
    void appendTail(int value) {
        stack1.push(value);
    }
    
    int deleteHead() {
        if (stack2.empty()) {
            while (!stack1.empty()) {
                stack2.push(stack1.top());
                stack1.pop();
            }
        }
        if (stack2.empty()) {
            return -1;
        } else {
            int ans = stack2.top();
            stack2.pop();

            return ans;
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue* obj = new CQueue();
 * obj->appendTail(value);
 * int param_2 = obj->deleteHead();
 */