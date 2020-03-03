// 1、排序，时间复杂度不好
var merge = function(A, m, B, n) {
    let temp = m;
    for (let i = 0; i < n; ++i) {
        A[temp++] = B[i];
    }
    A.sort((a, b) => {
        return a - b;
    })
};


// 2、双指针，需要额外空间，空间复杂度不好

// 3、逆向双指针,不需要排序或者额外空间，最佳解法
var merge = function(A, m, B, n) {
    let pA = m - 1, pB = n - 1, end = m + n - 1;
    let cur;

    while (pA >= 0 || pB >= 0) {
        if (pA === -1) 
            cur = B[pB--];
        else if (pB === -1) {
            cur = A[pA--];
        } else if (A[pA] > B[pB]) {
            cur = A[pA--];
        } else 
            cur = B[pB--];
        A[end--] = cur;
    }
};
