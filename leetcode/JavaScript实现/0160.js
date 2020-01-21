// 自己的想法就是双指针，但是下面别人的想法的代码更加精简，佩服
/*
双指针法。初始化两个指针pA和pB分别指向headA和headB，每次pA和pB各走一步，当pA触底后变轨到headB，
同理，当pB触底后变轨到headA。这样就只需遍历（A的非公共部分+B的非公共部分+AB的公共部分）。
*/
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB;
    while(pA !== pB) {
        pB = pB ? pB.next : headA;
        pA = pA ? pA.next : headB;
    }
    return pA;  // return pA 和 return pB是一个道理
};
