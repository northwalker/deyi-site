import romanToInt from '../romanToInt.js';

describe('Test function romanToInt', () => {
  test('test I', () => {
    expect(romanToInt('I')).toBe(1);
  });
  test('test IV', () => {
    expect(romanToInt('IV')).toBe(4);
  });
  test('test VIII', () => {
    expect(romanToInt('VIII')).toBe(8);
  });
  test('test XI', () => {
    expect(romanToInt('XI')).toBe(11);
  });
  test('test LXXVII', () => {
    expect(romanToInt('LXXVII')).toBe(77);
  });
  test('test XCIX', () => {
    expect(romanToInt('XCIX')).toBe(99);
  });
  test('test C', () => {
    expect(romanToInt('C')).toBe(100);
  });
  test('test CXXIII', () => {
    expect(romanToInt('CXXIII')).toBe(123);
  });
  test('test D', () => {
    expect(romanToInt('D')).toBe(500);
  });
  test('test CMXCIX', () => {
    expect(romanToInt('CMXCIX')).toBe(999);
  });
  test('test MLXXVII', () => {
    expect(romanToInt('MLXXVII')).toBe(1077);
  });
  test('test MCCXXXIV', () => {
    expect(romanToInt('MCCXXXIV')).toBe(1234);
  });
  test('test MCMLXXXVIII', () => {
    expect(romanToInt('MCMLXXXVIII')).toBe(1988);
  });
  test('test MMCMLXXXVIII', () => {
    expect(romanToInt('MMCMLXXXVIII')).toBe(2988);
  });
  test('test MMMCMXCIX', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });
});
