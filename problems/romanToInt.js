var romanToInt = function (s) {
  s = s.replaceAll("IV", "4*");
  s = s.replaceAll("IX", "9*");
  s = s.replaceAll("XL", "40*");
  s = s.replaceAll("XC", "90*");
  s = s.replaceAll("CD", "400*");
  s = s.replaceAll("CM", "900*");
  s = s.replaceAll("I", "1*");
  s = s.replaceAll("V", "5*");
  s = s.replaceAll("X", "10*");
  s = s.replaceAll("L", "50*");
  s = s.replaceAll("C", "100*");
  s = s.replaceAll("D", "500*");
  s = s.replaceAll("M", "1000*");
  var arabicNum = 0;
  s.split("*").forEach((strNum) => {
    var a = new Number(strNum);
    arabicNum += a;
  });
  return arabicNum;
};

var romanToInt2 = function (s) {
  s = s.replaceAll("IV", "4*");
  s = s.replaceAll("IX", "9*");
  s = s.replaceAll("XL", "40*");
  s = s.replaceAll("XC", "90*");
  s = s.replaceAll("CD", "400*");
  s = s.replaceAll("CM", "900*");
  s = s.replaceAll("I", "1*");
  s = s.replaceAll("V", "5*");
  s = s.replaceAll("X", "10*");
  s = s.replaceAll("L", "50*");
  s = s.replaceAll("C", "100*");
  s = s.replaceAll("D", "500*");
  s = s.replaceAll("M", "1000*");
  var arabicNum = 0;
  s.split("*").forEach((strNum) => {
    var a = new Number(strNum);
    arabicNum += a;
  });
  return arabicNum;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt3 = function (s) {
  const values = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  result = 0;
  current = 0;
  previous = 0;
  for (const char of s.split("").reverse()) {
    current = values.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt2("MCMXCIV"));
console.log(romanToInt3("MCMXCIV"));
