# Python 

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0
        
        len1 = len(needle)

        for i in range(len(haystack)):
            if haystack[i] == needle[0]:
                temp = haystack[i : i + len1]

                if temp == needle:
                    return i
        
        return -1

```


# JavaScript

- 2021.07.24

```js
// 1、自己第一想法很笨的方法
var strStr = function(haystack, needle) {
    if (needle.length == 0)
        return 0;
    
    let len = needle.length;

    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle[0]) {
            let temp = haystack.substr(i, len);

            if (temp === needle) {
                return i;
            }
        }
    }

    return -1;
};

// 2、KMP 
var strStr = function(haystack, needle) {
    if (needle === "")
        return 0;
    
    let next = getNext(needle);
    let hi = 0, ne = 0;

    while (hi < haystack.length) {
        if (ne == -1 || haystack[hi] == needle[ne]) {
            if (ne == needle.length - 1)
                return (hi - needle.length + 1);
            
            ++hi;
            ++ne;
        } else {
            ne = next[ne];
        }
    }

    return -1;
};
function getNext(needle) {
    let next = [];
    next[0] = -1;
    let i = 0, j = -1;

    while (i < needle.length) {
        if (j == -1 || needle[i] === needle[j]) {
            next[++i] = ++j;
        } else {
            j = next[j];
        }
    }

    return next;
}
```

# C++

```C++
class Solution {
public:
    int strStr(string haystack, string needle) {
          if(needle.size()==0)
            return 0;
        if( haystack.find(needle)!=string::npos )
        {
            return haystack.find(needle);
        }
        else
        {
            return -1;
        }
    }
};
```


