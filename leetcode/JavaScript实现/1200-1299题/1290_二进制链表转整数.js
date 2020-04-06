// 1、模拟下就行了，直接法
var getDecimalValue = function(head) {
    let ans = "";
    let p = head;

    // 将链表的值连成一个字符串
    while (p) {
        ans += p.val.toString();
        p = p.next;
    }

    // parseInt(s, 2); 将二进制s转化为十进制
    return parseInt(ans, 2);
};


// 2、位运算
var getDecimalValue = function(head) {
    let cur = head;
    let ans = 0;

    while (cur) {
        ans = ans << 1;
        ans += cur.val;
        cur = cur.next;
    }

    return ans;
};