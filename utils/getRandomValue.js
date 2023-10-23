export function getRandomNumber(min = 1, max = 100) {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array)[0];
  const range = max - min + 1;
  return (array[0] % range) + min;
}

export function getMathRandomNumber(min = 1, max = 100) {
  const base = Math.ceil(min);
  const limit = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (limit - base + 1) + base);
}

export function getRandomUUID() {
  return crypto.randomUUID();
}

export default getRandomNumber;
