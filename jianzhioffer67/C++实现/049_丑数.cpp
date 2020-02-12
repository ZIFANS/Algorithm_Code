/*
题目描述；
把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
*/

/*
思想：
*/

class Solution {
public:
    int GetUglyNumber_Solution(int index) {
        if(index < 7)
            return index;
        int p2 = 0, p3 = 0, p5 = 0, newNum = 1;
        vector<int> arr;
        arr.push_back(newNum);
        while(arr.size() < index) {
            newNum = min(arr[p2] * 2, min(arr[p3] * 3, arr[p5]* 5));
            if(arr[p2] * 2 == newNum)
                ++p2;
            if(arr[p3] * 3 == newNum)
                ++p3;
            if(arr[p5] * 5 ==newNum)
                ++p5;
            arr.push_back(newNum);
        }
        return newNum;
    }
};