// 这里暴力解知道一定会超时，想看看通过的测试用例。 46/48
// 哈哈哈 但是还是感觉好好笑，4个循环。
var fourSumCount = function(A, B, C, D) {
    let ans = 0;
    for (let a = 0; a < A.length; ++a) {
        for (let b = 0; b < B.length; ++b) {
            for (let c = 0; c < C.length; ++c) {
                for (let d = 0; d < D.length; ++d) {
                    if (A[a] + B[b] + C[c] + D[d] === 0) {
                        ++ans;
                    }
                }
            }
        }
    }
    return ans;
};

/*
一.采用分为两组，HashMap存一组，另一组和HashMap进行比对。
二.这样的话情况就可以分为三种：
1.HashMap存一个数组，如A。然后计算三个数组之和，如BCD。时间复杂度为：O(n)+O(n^3),得到O(n^3).
2.HashMap存三个数组之和，如ABC。然后计算一个数组，如D。时间复杂度为：O(n^3)+O(n),得到O(n^3).
3.HashMap存两个数组之和，如AB。然后计算两个数组之和，如CD。时间复杂度为：O(n^2)+O(n^2),得到O(n^2).
三.根据第二点我们可以得出要存两个数组算两个数组。
四.我们以存AB两数组之和为例。首先求出A和B任意两数之和sumAB，以sumAB为key，sumAB出现的次数为value，存入hashmap中。
然后计算C和D中任意两数之和的相反数sumCD，在hashmap中查找是否存在key为sumCD。
算法时间复杂度为O(n2)。
*/
var fourSumCount = function(A, B, C, D) {
    let len = A.length;
    let map1 = new Map();
    let count = 0;
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len; ++j) {
            let key = A[i] + B[j];
            let value = map1.get(key) || 0;
            map1.set(key, value + 1);
        }
    }
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len; ++j) {
            let key = -(C[i] + D[j]);
            let value = map1.get(key) || 0;
            count += value;
        }
    }
    return count;
};

