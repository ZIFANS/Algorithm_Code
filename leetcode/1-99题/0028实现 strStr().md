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

```js
// 1、很笨的方法
var strStr = function(haystack, needle) {
    if (needle.length == 0)
        return 0;
    
    let len = needle.length;

    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle[0]) {
            let temp = haystack.slice(i, i + len);
            
            if (temp === needle)
                return i;
        }
    }

    return -1;
};
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


