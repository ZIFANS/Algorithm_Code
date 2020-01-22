// 自己的代码 就是根据题意来，没用到什么技巧。
var fizzBuzz = function(n) {
    let ans = [];
    for(let i = 1; i <= n; ++i) {
        let temp = "";
        if( (i % 3 === 0) && (i % 15 !== 0)) {
            temp = "Fizz";
        } else if( (i % 5 === 0) && (i % 15 !== 0)) {
            temp = "Buzz";
        } else if(i % 15=== 0){
            temp = "FizzBuzz";
        } else {
            temp = i.toString();
        }
        ans.push(temp);
    }
    return ans;
};