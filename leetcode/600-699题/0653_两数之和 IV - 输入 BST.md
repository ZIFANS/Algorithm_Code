# Python 

```python
```


# JavaScript

```js
var findTarget = function(root, k) {
    let arr = [];

    function DFS(root) {
        if (root) {
            DFS(root.left);
            arr.push(root.val);
            DFS(root.right);
        }
    }

    DFS(root);

    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] < k)
            left++;
        else if (arr[left] + arr[right] > k)
            right--;
        else
            return true;
    }

    return false;
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


