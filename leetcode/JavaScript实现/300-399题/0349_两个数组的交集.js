// 1、用Set，然后用indexOf,接近暴力法
var intersection = function(nums1, nums2) {
    let ans = [];
    let set1 = new Set([...nums1]);

    for (let i = 0; i < nums2.length; ++i) {
        if (set1.has(nums2[i]) && ans.indexOf(nums2[i]) === -1) 
            ans.push(nums2[i]);
    }

    return ans;
};

// 2、用两个Set
var intersection = function(nums1, nums2) {
    let ans = new Set();
    let set1 = new Set([...nums1]);

    for (let i = 0; i < nums2.length; ++i) {
        if (set1.has(nums2[i])) 
            ans.add(nums2[i]);
    }

    return [...ans];
};