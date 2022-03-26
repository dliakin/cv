/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  roman = "";
  if (num >= 1000) {
    a = Math.floor(num / 1000);
    for (i = 0; i < a; i++) {
      roman += "M";
    }
    roman += intToRoman(num - a * 1000);
    return roman;
  }
  if (num >= 900) {
    roman += "CM";
    roman += intToRoman(num - 900);
    return roman;
  }
  if (num >= 500) {
    roman += "D";
    roman += intToRoman(num - 500);
    return roman;
  }
  if (num >= 400) {
    roman += "CD";
    roman += intToRoman(num - 400);
    return roman;
  }
  if (num >= 100) {
    a = Math.floor(num / 100);
    for (i = 0; i < a; i++) {
      roman += "C";
    }
    roman += intToRoman(num - a * 100);
    return roman;
  }
  if (num >= 90) {
    roman += "XC";
    roman += intToRoman(num - 90);
    return roman;
  }
  if (num >= 50) {
    roman += "L";
    roman += intToRoman(num - 50);
    return roman;
  }
  if (num >= 40) {
    roman += "XL";
    roman += intToRoman(num - 40);
    return roman;
  }
  if (num >= 10) {
    a = Math.floor(num / 10);
    for (i = 0; i < a; i++) {
      roman += "X";
    }
    roman += intToRoman(num - a * 10);
    return roman;
  }
  if (num >= 9) {
    roman += "IX";
    roman += intToRoman(num - 9);
    return roman;
  }
  if (num >= 5) {
    roman += "V";
    roman += intToRoman(num - 5);
    return roman;
  }
  if (num >= 4) {
    roman += "IV";
    roman += intToRoman(num - 4);
    return roman;
  }
  if (num >= 1) {
    for (i = 0; i < num; i++) {
      roman += "I";
    }
    return roman;
  }
  return roman;
};

console.log(intToRoman(1994));
