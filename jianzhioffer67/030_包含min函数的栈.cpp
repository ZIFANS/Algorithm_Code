/*
题目描述：
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
*/

/*
思想：用两个栈：一个数据栈data,一个辅助栈min
push操作：，将数据push到data栈里面，若push的数据比min的栈顶元素小，则将元素push到min栈里，否则，
将min的栈顶元素继续push到min栈中。

pop操作：直接将data栈和min栈都pop一个元素

min操作：直接取辅助栈min的栈顶
*/

class Solution {
public:
    void push(int value) {
        m_data.push(value);
        if(m_min.size() == 0 || value < m_min.top()) {
            m_min.push(value);
        } else{
            m_min.push(m_min.top());
        }
    }
    void pop() {
        if(m_data.size() > 0 && m_min.size() > 0) {
            m_data.pop();
            m_min.pop();
        }
    }
    int top() {
        if(m_data.size() > 0)
            return m_data.top();
    }
    int min() {
        if(m_min.size() > 0) {
            return m_min.top();
        }
    }
private:
    stack<int> m_data;    // 数据栈
    stack<int> m_min; // 辅助栈
};