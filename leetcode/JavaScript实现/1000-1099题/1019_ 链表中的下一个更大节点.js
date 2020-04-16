// 1、暴力法
var nextLargerNodes = function(head) {
    let ans = [], temp = [];
    let p = head;

    while (p) {
        temp.push(p.val);
        p = p.next;
    }

    for (let i = 0; i < temp.length; ++i) {
        for (let j = i + 1; j < temp.length; ++j) {
            // 遇到第一个比temp[i]大的数就跳出循环
            if (temp[j] > temp[i]) {
                ans.push(temp[j]);
                break;
            // 遍历到数组最后，说明temp[i]自己是最大的，则对ans添加一个0
            } else if (j === temp.length - 1) {
                ans.push(0);
            }
        }
    }

    // 最后一个数的 最大数总是0，没有能和它比较的
    ans.push(0);

    return ans;
};