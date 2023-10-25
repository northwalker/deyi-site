import {
  getRandomNumber,
  getMathRandomNumber,
  // getRandomUUID,
} from '../getRandomValue.js';

describe('Test function getRandomNumber', () => {
  test('Is a number', () => {
    expect(isNaN(getRandomNumber())).toBeFalsy();
  });
  test('Is greater than min', () => {
    expect(getRandomNumber(1, 100)).toBeGreaterThanOrEqual(1);
  });
  test('Is less than max', () => {
    expect(getRandomNumber(1, 100)).toBeLessThanOrEqual(100);
  });
});

describe('Test function getMathRandomNumber', () => {
  test('Is a number', () => {
    expect(isNaN(getMathRandomNumber())).toBeFalsy();
  });
  test('Is greater than min', () => {
    expect(getMathRandomNumber(1, 100)).toBeGreaterThan(1);
  });
  test('Is less than max', () => {
    expect(getMathRandomNumber(1, 100)).toBeLessThan(100);
  });
});

// describe('Test function getRandomUUID', () => {
//   test('Has correct string length', () => {
//     expect(getRandomUUID()).toBe(undefined);
//   });
//   test('Has correct string length', () => {
//     const uuid = getRandomUUID();
//     expect(uuid.length).toBe(36);
//   });
//   test('Has correct string length', () => {
//     const uuid = getRandomUUID();
//     expect(uuid?.split('-').length).toBe(5);
//   });
//   test('Has correct string regexp format', () => {
//     const uuid = getRandomUUID();
//     expect(
//       uuid.match(
//         /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
//       )
//     ).toBeTruthy();
//   });
// });
