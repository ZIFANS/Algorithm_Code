// 自己的代码
// 这题其实很没意思，没看清楚题，以为head没有传进来，
// 抓住题目传来的参数node不是一个值就行。
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};