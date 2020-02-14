// 第一想法是双指针
// 但是看了别人的一个双指针法很好
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
}; 