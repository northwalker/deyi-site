/**
 * @param {number} num
 * @return {string}
 */

// Constraints:
// 1 <= num <= 3999
export default function intToRoman(num) {
  if (isNaN(num) || num > 3999 || num < 0) return false;

  const M = ['', 'M', 'MM', 'MMM'];
  const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return (
    M[parseInt(num / 1000)] +
    C[parseInt((num % 1000) / 100)] +
    X[parseInt((num % 100) / 10)] +
    I[parseInt(num % 10)]
  );
}
