// 逆向双指针,不需要排序或者额外空间
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
