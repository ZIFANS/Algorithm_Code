var addBinary = function(a, b) {
    let ans = "";
    let carry = 0;
    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; --i, --j) {
        let sum = carry;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        carry = Math.floor(sum / 2);
    }
    ans += carry === 1 ? carry : "";
    return ans.split('').reverse().join('');
};

