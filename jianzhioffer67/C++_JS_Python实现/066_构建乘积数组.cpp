/*
题目描述：
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
*/

/*
思想：
//B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]
//从左到右算 B[i]=A[0]*A[1]*...*A[i-1]
//从右到左算B[i]*=A[i+1]*...*A[n-1]
*/

class Solution {
public:
    vector<int> multiply(const vector<int>& A) {
        int len = A.size();
        vector<int> B(len);
        int ans = 1;
        for(int i = 0; i < len; ++i) {
            B[i] = ans;
            ans *= A[i];
        }
        ans = 1;
        for(int i = len - 1; i >= 0; --i) {
            B[i] *= ans;
            ans *= A[i];
        }
        return B;
    }
};