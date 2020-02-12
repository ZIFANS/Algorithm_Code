// 自己代码，想法简单没啥好说的
var subtractProductAndSum = function(n) {
    let ji = 1, he = 0;
    let s = n.toString();
    for(let i = 0; i < s.length; ++i) {
        ji *= parseInt(s[i]);
        he += parseInt(s[i]);
    }
    return ji - he;
};
