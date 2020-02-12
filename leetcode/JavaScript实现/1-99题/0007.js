
// 自己的代码 

var reverse = function(x) {
    let y = Math.abs(x).toString().split('').reverse().join(''); // 其实这个的y是字符串
    if(x >= 0 && y < Math.pow(2, 31) - 1)       // 字符串y可以和 number类型的 Math.pow(2, 31) - 1 比较
        return y;
    else if(x < 0 && y < Math.pow(2, 31) - 1)
        return -y;
    else 
        return 0;
};