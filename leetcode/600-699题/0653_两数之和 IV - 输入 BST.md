# Python 

```python
```


# JavaScript

- 2021.09.04

```js
// 1、第一想法，遍历成数组，然后判断
var findTarget = function(root, k) {
    let ans = [];

    const inOrder = (root) => {
        if (!root)
            return;
        
        inOrder(root.left);
        ans.push(root.val);
        inOrder(root.right);
    };

    inOrder(root);

    let left = 0, right = ans.length - 1;

    while (left < right) {
        if (ans[left] + ans[right] < k) {
            ++left;
        } else if (ans[left] + ans[right] > k) {
            --right;
        } else {
            return true;
        }
    }

    return false;
};

// 2、边遍历，边判断
var findTarget = function(root, k) {
    let set = new Set();

    const DFS = (root) => {
        if (!root)
            return false;
        
        if (set.has(k - root.val)) 
            return true;
        
        set.add(root.val);

        return DFS(root.left) || DFS(root.right);
    };

    return DFS(root);
};
```

# C++

```C++
class Solution {
public:
    bool findTarget(TreeNode* root, int k) {
        if (!root)
            return false;
        
        return find(root, root, k);
    }
    bool find(TreeNode* L, TreeNode* R, int k) {
        if (!L || !R)
            return false;
        
        if (L == R)
            return find(L->left, R, k) || find(L, R->right, k);
        
        if (L->val + R->val > k) {
            return find(L->left, R, k) || find(L, R->left, k);
        } else if (L->val + R->val < k) {
            return find(L->right, R, k) || find(L, R->right, k);
        }

        return true;
    }
};
```


