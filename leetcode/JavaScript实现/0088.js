// 自己的代码，
// 就是把num2的数据也添加到num1中，然后排序下。
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    for(let i = 0; i < n; ++i) {
        nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => {
        return a - b
    });
    /*nums1.sort(function(a, b) {
        return a - b
    });*/
};
