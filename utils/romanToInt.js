/**
 * @param {string} s
 * @return {number}
 */

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// t is guaranteed that s is a valid roman numeral in the range [1, 3999].
export default function romanToInt(s) {
  const romanValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let i = 0,
    sum = 0;
  while (i < s.length) {
    const c = s.charAt(i);
    const value = romanValues[c];
    if (value) {
      const nextValue = romanValues[s.charAt(i + 1)];
      if (nextValue > value) {
        sum += romanValues[s.charAt(i + 1)] - romanValues[c];
        i += 2;
      } else {
        sum += romanValues[c];
        i++;
      }
    } else i++;
  }
  return sum;
}
