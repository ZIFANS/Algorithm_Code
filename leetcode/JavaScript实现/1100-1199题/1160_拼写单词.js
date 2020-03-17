// 1. hash， 接近于暴力法了
var countCharacters = function(words, chars) {
    let obj = {};
    let ans = 0;

    for (let i = 0; i < chars.length; ++i) {
        obj[chars[i]] ? obj[chars[i]] ++ : obj[chars[i]] = 1;
    }

    for (let i = 0; i < words.length; ++i) {
        if (words[i].length > chars.length)
            continue;
        let flag = true;
        // 深拷贝一份obj
        let temp = JSON.parse(JSON.stringify(obj));

        for (let j = 0; j < words[i].length; ++j) {
            if (temp[words[i][j]]) {
                temp[words[i][j]]--;
            } else {
                flag = false;
                break;
            }
        }

        if (flag)
            ans += words[i].length;
    }

    return ans;
};


// 1.也是hash,用的是ES6 Map重写了遍
var countCharacters = function(words, chars) {
    let map = new Map();
    let ans = 0;

    for (let i = 0; i < chars.length; ++i) {
        let val = map.get(chars[i]);
        if (val) {
            map.set(chars[i], ++val);
        } else {
            map.set(chars[i], 1);
        }
    }

    for (let i = 0; i < words.length; ++i) {
        // 开始就是map深拷贝不对
        let temp = new Map(map);
        let wordsArr = words[i];
        let flag = true;

        for (let j = 0; j < wordsArr.length; ++j) {
            let val = temp.get(wordsArr[j]);
            if (val) {
                temp.set(wordsArr[j], --val);
            } else {
                flag = false;
                break;
            }
        }
        
        if (flag) 
            ans += wordsArr.length;
    }

    return ans;
};