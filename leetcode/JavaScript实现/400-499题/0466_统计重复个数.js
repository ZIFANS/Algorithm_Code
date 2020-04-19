var getMaxRepetitions = function (s1, n1, s2, n2) {
    let S1 = Array(n1).fill(s1).join('');
    let S2 = Array(n2).fill(s2).join('');
    let nums = 0;
    let index = 0;

    for (let i = 0; i < S1.length; i++) {
        if (S1[i] === S2[index]) 
            index++;
        if (index === S2.length) {
            index = 0;
            nums++;
        }
    }
    return nums;
};
