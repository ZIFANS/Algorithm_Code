var letterCombinations = function(digits) {
    const maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    const ans = [];
    for (let num of digits) {
        let w = maps[num];
        if (ans.length > 0) {
            let temp = [];
            for (let i = 0; i < ans.length; ++i) {
                let w1 = w.length;
                for (let j = 1; j < w1; ++j) {
                    temp.push(ans[i] + w[j]);
                }
                ans[i] += w[0];
            }
            ans.push(...temp);
        } else {
            ans.push(...w);
        }
    }
    return ans;
};
