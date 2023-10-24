import intToRoman from '../intToRoman.js';

describe('Test function intToRoman 1~20', () => {
  test('test 1', () => {
    expect(intToRoman(1)).toBe('I');
  });
  test('test 2', () => {
    expect(intToRoman(2)).toBe('II');
  });
  test('test 3', () => {
    expect(intToRoman(3)).toBe('III');
  });
  test('test 4', () => {
    expect(intToRoman(4)).toBe('IV');
  });
  test('test 5', () => {
    expect(intToRoman(5)).toBe('V');
  });
  test('test 6', () => {
    expect(intToRoman(6)).toBe('VI');
  });
  test('test 7', () => {
    expect(intToRoman(7)).toBe('VII');
  });
  test('test 8', () => {
    expect(intToRoman(8)).toBe('VIII');
  });
  test('test 9', () => {
    expect(intToRoman(9)).toBe('IX');
  });
  test('test 10', () => {
    expect(intToRoman(10)).toBe('X');
  });
  test('test 11', () => {
    expect(intToRoman(11)).toBe('XI');
  });
  test('test 19', () => {
    expect(intToRoman(19)).toBe('XIX');
  });
  test('test 20', () => {
    expect(intToRoman(20)).toBe('XX');
  });
});

describe('Test function intToRoman 20~500', () => {
  test('test 50', () => {
    expect(intToRoman(50)).toBe('L');
  });
  test('test 60', () => {
    expect(intToRoman(60)).toBe('LX');
  });
  test('test 77', () => {
    expect(intToRoman(77)).toBe('LXXVII');
  });
  test('test 99', () => {
    expect(intToRoman(99)).toBe('XCIX');
  });
  test('test 100', () => {
    expect(intToRoman(100)).toBe('C');
  });
  test('test 101', () => {
    expect(intToRoman(101)).toBe('CI');
  });
  test('test 123', () => {
    expect(intToRoman(123)).toBe('CXXIII');
  });
  test('test 500', () => {
    expect(intToRoman(500)).toBe('D');
  });
  test('test 999', () => {
    expect(intToRoman(999)).toBe('CMXCIX');
  });
  test('test 1000', () => {
    expect(intToRoman(1000)).toBe('M');
  });
  test('test 1234', () => {
    expect(intToRoman(1234)).toBe('MCCXXXIV');
  });
});
describe('Test function intToRoman 500~', () => {
  test('test 2000', () => {
    expect(intToRoman(2000)).toBe('MM');
  });
  test('test 1988', () => {
    expect(intToRoman(1988)).toBe('MCMLXXXVIII');
  });
  test('test 2988', () => {
    expect(intToRoman(2988)).toBe('MMCMLXXXVIII');
  });
  test('test 3999', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('test 0', () => {
    expect(intToRoman(0)).toBe('');
  });
  test('test -1', () => {
    expect(intToRoman(-1)).toBe(false);
  });
  test('test 4000', () => {
    expect(intToRoman(4000)).toBe(false);
  });
  test('test 9000', () => {
    expect(intToRoman(9000)).toBe(false);
  });
});
