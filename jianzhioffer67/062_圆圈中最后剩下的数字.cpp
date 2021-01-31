/*
题目描述：
每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。
HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。
然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,
然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....
这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。
请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

如果没有小朋友，请返回-1
*/

/*
思想：
使用链表还是太过于复杂，使用了一个vector，当符合计数条件时，直接移除这个数据，
最后vector大小为1的时候，就是找到了幸运星。
*/

class Solution {
public:
    int LastRemaining_Solution(int n, int m) {  // n 是小朋友编号， m 是
        if(n <= 0)
            return -1;
        if(n == 1)
            return n;
        vector<int> v(n);
        for(int i = 0; i < v.size(); ++i) 
            v[i] = i;
        int temp = 0;
        while(v.size() > 1) {
            int count = temp + m - 1;
            int size = v.size();
            int num = count % size;
            temp = num;
            v.erase(v.begin() + num);
        }
        return v[0];
    }
};