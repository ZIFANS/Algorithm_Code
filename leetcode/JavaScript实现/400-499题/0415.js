// 自己的代码，先转化为数组， 然后相加
var addStrings = function(num1, num2) {
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    const maxLength = Math.max(num1.length, num2.length);

    let tempN = 0, tempM = 0, tempAdd = 0, extNum = 0;
    let ans = [];
    for (let index = 0; index < maxLength; ++index) {
        tempN = num1[index] || 0;
        tempM = num2[index] || 0;
        tempAdd = Number(tempN) + Number(tempM);
        if (extNum) {
            tempAdd += extNum;
        }
        extNum = tempAdd >= 10 ? 1 : 0;
        if (index === (maxLength - 1) && extNum) {
            ans.push(tempAdd);
        } else {
            ans.push(tempAdd % 10);
        }
    }
    return ans.reverse('').join('');
};