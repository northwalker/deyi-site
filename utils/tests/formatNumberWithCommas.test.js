import formatNumberWithCommas from '../formatNumberWithCommas.js';

describe('Test function formatNumberWithCommas', () => {
  test('test zero', () => {
    expect(formatNumberWithCommas(0)).toBe('0');
  });
  test('test 123', () => {
    expect(formatNumberWithCommas(123)).toBe('123');
  });
  test('test 1,234', () => {
    expect(formatNumberWithCommas(1234)).toBe('1,234');
  });
  test('test 123,456', () => {
    expect(formatNumberWithCommas(123456)).toBe('123,456');
  });
  test('test 1,234,567', () => {
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
  });
  test('test 1,234.456', () => {
    expect(formatNumberWithCommas(1234.456)).toBe('1,234.456');
  });
  test('test 1,234.456', () => {
    expect(formatNumberWithCommas(1234.456)).toBe('1,234.456');
  });
  test('test -1234.456', () => {
    expect(formatNumberWithCommas(-1234.456)).toBe('-1,234.456');
  });
  test('test 9,999,999', () => {
    expect(formatNumberWithCommas(9999999)).toBe('9,999,999');
  });
});
