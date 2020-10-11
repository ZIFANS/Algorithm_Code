# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
class Solution:
    def __init__(self):
        self.maxSum = float("-inf")

    def maxPathSum(self, root: TreeNode) -> int:
        def maxGain(node):
            if not node:
                return 0
            
            leftGain = max(maxGain(node.left), 0)
            rightGain = max(maxGain(node.right), 0)

            priceNewpath = node.val + leftGain + rightGain

            self.maxSum = max(self.maxSum, priceNewpath)

            return node.val + max(leftGain, rightGain)

        maxGain(root)

        return self.maxSum
        


