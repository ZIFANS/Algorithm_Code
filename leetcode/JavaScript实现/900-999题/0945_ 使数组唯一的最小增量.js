// 1、排序 
var minIncrementForUnique = function (A) {
    let ans = 0;
    A.sort((a, b) => {
        return a - b;
    });

    for (let i = 1; i < A.length; ++i) {
        if (A[i] <= A[i - 1]) {
            let temp = A[i - 1] + 1 - A[i];
            A[i] += temp;
            ans += temp;
        }
    }

    return ans;
};

// 2、 

