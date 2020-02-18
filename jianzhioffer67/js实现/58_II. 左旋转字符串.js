// 自己的代码，思想：
// 先旋转 0, len - k 
// 再旋转 len - k , len
// 最后旋转 0, len
// 但是JS又更好的办法
var reverseLeftWords = function(s, n) {
    let left = s.slice(n);
    let right = s.slice(0, n);
    return left + right;
};

