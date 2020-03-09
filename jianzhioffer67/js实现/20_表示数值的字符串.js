var isNumber = function (s) {
    const checkNumber = (str) => {
        const numReg = new RegExp(/[0-9]/);
        // 标记是否出现过数字，防止 '.' ' +' 或者 ' ' 的情况
        let decimal = false,
            // 判断点号是否无效, true 为无效，防止 '1.1.1' 和 '1e2.5' 的情况
            point = false,
            // 判断'e'号是否无效, true 为无效，防止'1e1e'的情况
            exponent = false,
            // 记录'e'出现的位置，判断'e'后接正负号的情况, 如 '1e-10'
            exponentPlace = -1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+' || str[i] === '-') {
                // 若出现'+/-'，而且不在字符的首位或'e'之后的首位，返回错误。
                if (i !== 0 && i !== exponentPlace + 1) {
                    return false;
                }
            } else if (str[i] === '.') {
                // 判断点号是否有效，若有效则设 point 为true，不可再次出现点号。
                if (point) {
                    return false;
                } else {
                    point = true;
                }
            } else if (str[i] === 'e') {
                // 若已出现'e'或者在遇到'e'之前没有出现过数字，即'e1'的情况，返回无效。
                if (exponent || !decimal) {
                    return false;
                } else {
                    // 设 exponent 为 true，避免再次出现'e'的情况
                    exponent = true;
                    // 'e'之后不可出现点号
                    point = true;
                    // 'e'之后必须有数字
                    decimal = false;
                    // 记录 'e' 的位置，用于判断 '1e+10' 以及 '1e1-10' 的状况
                    exponentPlace = i;
                }
            } else if (numReg.test(str[i])) {
                decimal = true;
            } else {
                // 如果不为 [0-9e.\-+\s] 中的字符，返回 false
                return false;
            }
        }
        return decimal;
    }
    return checkNumber(s.trim());
};

