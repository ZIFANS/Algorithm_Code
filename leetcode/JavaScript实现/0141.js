// 自己的代码
// 在剑指offer上面做过。设置两个指针，慢、快指针。
var hasCycle = function(head) {
    if(!head)
        return false;
    let slow = head.next;
    if(!slow)
        return false;
    let fast = slow.next;
    while(fast !== null && slow !== null) {
        if(fast === slow)
            return true;
        slow = slow.next;
        fast = fast.next;
        if(fast !== null) 
            fast = fast.next;
    }
    return false;
};