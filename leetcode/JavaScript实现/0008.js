// 很多的第一想法是正则，但是我第一想法就是一步步来。
var myAtoi = function(str) {
    str = str.trim() 
  
    let number = 0 // 数字
    let factor = 1 // 正还是负
  
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = -Math.pow(2, 31)
  
    for (let i = 0; i < str.length; ++i) {
      if (isDigit(str[i])) { // 数字，直接运算
        number = number * 10 + (str[i] - '0')
      } else if (i === 0 && str[i] === '+') { // '+'号出现在首位，才有效
        factor = 1
      } else if (i === 0 && str[i] === '-') { // 同样，'-'号出现在首位，才有效
        factor = -1
      } else { // 其它字符，终止解析
        break
      }
    }
    number = number * factor // 正负
    number = Math.max(INT_MIN, Math.min(INT_MAX, number)) // 范围
    return number
  };
  function isDigit (char) {
    return /^[0-9]$/.test(char)
  }