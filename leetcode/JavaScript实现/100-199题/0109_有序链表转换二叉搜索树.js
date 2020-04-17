// 1、分治
var sortedListToBST = function(head) {
    let buildTree = function (head, tail) {
        if (head === tail)
            return null;
        
        let p1 = head, p2 = head;
        
        // 快慢指针
        while (p2 !== tail) {
            p2 = p2.next;
            
            if (p2 !== tail) {
                p1 = p1.next;
                p2 = p2.next;
            }
        }

        let treeNode = new TreeNode(p1.val);
        treeNode.left = buildTree(head, p1);
        treeNode.right = buildTree(p1.next, tail);

        return treeNode;
    };

    return buildTree(head, null);
};

