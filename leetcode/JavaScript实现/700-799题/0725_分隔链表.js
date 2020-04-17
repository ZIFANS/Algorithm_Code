// 1、
var splitListToParts = function(root, k) {
    let data = new Array(k).fill(null);

    let numArr = new Array(k).fill(0);
    let nowIndex = 0;
    let currentNode = root;

    while (currentNode) {
        numArr[nowIndex]++;

        if (nowIndex === k - 1) {
            nowIndex = 0;
        } else {
            ++nowIndex;
        }

        currentNode = currentNode.next;
    }

    currentNode = root;

    let i = 0;  // 第几项
    let j = 0;  // 第几项第几个
    let lastNode = null;

    while (currentNode) {
        ++j;
        if (data[i] === null) {
            data[i] = currentNode;
            lastNode && (lastNode.next = null);
        }
        if (j === numArr[i]){
            j = 0;
            i++;
        }
        lastNode = currentNode;
        currentNode = currentNode.next;
    }

    return data;
};
