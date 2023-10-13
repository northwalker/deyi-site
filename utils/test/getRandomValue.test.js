function getRandomNumber(min = 1, max = 100) {
  // eslint-disable-next-line no-undef
  const array = new Uint32Array(1);
  crypto.getRandomValues(array)[0];
  const range = max - min + 1;
  return (array[0] % range) + min;
}

// function getMathRandomNumber(min = 1, max = 100) {
//   const base = Math.ceil(min);
//   const limit = Math.floor(max);
//   // The maximum is inclusive and the minimum is inclusive
//   return Math.floor(Math.random() * (limit - base + 1) + base);
// }

const test1 = function () {
  const num = 100;
  let array = [],
    total = 0;

  for (let i = 0; i < num; i++) {
    const n = getRandomNumber(1, num);
    array[i] = n;
    total += n;
  }
  console.log('Length', array.length);
  // array.sort((a, b) => a - b);
  console.log('Test 1 Avg', Number(total / num).toFixed(2));
  console.log('Test 1 Median', array[2500], array[5000], array[7500]);
};

test1();
