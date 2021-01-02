/*
题目描述：
求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
*/

/*
思想：第一种思路：递归+短路原理 &&就是逻辑与，逻辑与有个短路特点，前面为假，后面不计算。缺点：递归的层数不能太深<3000
      第二种：构造函数
      这两种都是我能接受的思路。
*/

// 递归+短路原理
class Solution {
public:
    int Sum_Solution(int n) {
        int ans = n;
        ans && (ans += Sum_Solution(n-1));
        return ans;
    }
};

// 构造函数

class Assist {
public:
    Assist() {
        ++N;
        Sum += N;
    }
    static void Reset() {
        N = 0;
        Sum = 0;
    }
    static int GetSum() {
        return Sum;
    }
private:
    static int N;
    static int Sum;
};

int Assist::N = 0;
int Assist::Sum = 0;

class Solution {
public:
    int Sum_Solution(int n) {
        Assist::Reset();
        Assist *p = new Assist[n];
        delete []p;
        p = nullptr;
        return Assist::GetSum();
    }
};