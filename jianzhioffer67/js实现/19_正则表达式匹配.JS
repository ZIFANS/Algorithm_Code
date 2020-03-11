// 一行的正则搞定
var isMatch = function (s, p) {
    return new RegExp("^" + p + "$").test(s);
};
var subsets = function(nums) {
    if(!Object(nums).length){
      return []
    }
    var result = [];
    nums.sort()
    backtrack(result, [], nums, 0, nums.length);
    return result;
};

function backtrack(result, tempList, nums, start, n){
    result.push(tempList.concat());//没有长度限制，就直接放 result 中
    for(var i = start; i< n; i++){
        tempList.push(nums[i]) //试探
        backtrack(result, tempList, nums, i + 1, n) ; //对结果集的子序列保证顺序，那么i+1
        //即 tempList可以是[1,2]，不能是[2, 1]
        tempList.pop() //不管成功与否，退回上一步
    }
}