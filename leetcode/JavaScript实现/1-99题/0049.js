// 第一想法就是hash
var groupAnagrams = function(strs) {
    let ans = [], map = new Map();
    for(let i = 0; i < strs.length; ++i) {
        let k = strs[i].split('').sort().join('');
        if(map.has(k)) {
            map.get(k).push(strs[i]);
        } else {
            map.set(k, [strs[i]]);
        }
    }
    /*map.forEach((val, key) => {
        ans.push(val);
    });*/
    return [...map.values()];
};
