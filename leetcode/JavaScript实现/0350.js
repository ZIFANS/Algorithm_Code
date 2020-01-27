// 自己的代码
// 第一想法就是排序，然后双指针
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => {
        return a - b;
    });
    nums2.sort((a, b) => {
        return a - b;
    });
    let ans = [];
    let i = 0, j = 0, len1 = nums1.length, len2 = nums2.length;
    while(i < len1 && j < len2) {
        if(nums1[i] === nums2[j]) {
            ans.push(nums1[i]);
            ++i;
            ++j;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return ans;
};




