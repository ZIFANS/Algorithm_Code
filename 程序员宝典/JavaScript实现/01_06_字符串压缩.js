// 1.题目简单，模拟下就行了
var compressString = function(S) {
    let ans = "";
    if (S.length <= 1)
        return S;

    let temp = 1;
    for (let i = 1; i <= S.length; ++i) {
        if (S[i - 1] === S[i]) {
            ++temp;
        } else {
            ans += S[i - 1] + temp.toString();
            temp = 1;
        }
    }

    return ans.length < S.length ? ans : S;
};