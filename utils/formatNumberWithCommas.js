// formatNumberWithCommas.js
'use strict';
function formatNumberWithCommas(num) {
  return num.toLocaleString('en-US');
}

// console.log(formatNumberWithCommas(0)); // 0
// console.log(formatNumberWithCommas(123)); // 123
// console.log(formatNumberWithCommas(1234)); // 1,234
// console.log(formatNumberWithCommas(123456)); // 123,456
// console.log(formatNumberWithCommas(1234567)); // 1,234,567
// console.log(formatNumberWithCommas(1234.456)); // 1,234.456
// console.log(formatNumberWithCommas(-1234.456)); // 1,234.456

export default formatNumberWithCommas;
