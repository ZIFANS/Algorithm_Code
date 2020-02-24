// 自己的代码
// 在剑指offer上面做过。设置两个指针，慢、快指针。
var hasCycle = function (head) {
    let fast = head, slow = head;
    while (true) {
        if (fast === null || fast.next === null)
            return false;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            return true;
    };
};