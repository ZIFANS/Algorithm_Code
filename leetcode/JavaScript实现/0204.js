// 第一想法暴力解，判断每个数是否是质数，执行时间很长，但是内存消耗很低。
var countPrimes = function(n) {
    let ans = 0;
    for(let i = 1; i < n; ++i) {
        if(isPrime(i))
            ++ans;
    }
    return ans;
};
function isPrime(n) {
    if(n < 2)
        return false;
    for(let i = 2; i <= Math.sqrt(n); ++i) {
        if(n % i === 0)
            return false;
    }
    return true;
}


// 别人的想法
// 埃拉托斯特尼筛法
var countPrimes = function(n) {
    let count = 0;
    let signs = new Uint8Array(n);
    for(let i = 2; i < n; ++i) {
        if(!signs[i - 1])
            ++count;
        for(let j = i * i; j <= n; j += i) {
            signs[j - 1] = true;
        }
    }
    return count;
};
