import formatBytes from '../formatBytes.js';

describe('Test function formatNumberWithCommas sizes', () => {
  test('test 0 Bytes', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
  });
  test('test 100 Bytes', () => {
    expect(formatBytes(100)).toBe('100 Bytes');
  });
  test('test 1024 Bytes', () => {
    expect(formatBytes(1024)).toBe('1 KB');
  });
  test('test 3 MB', () => {
    const num = 3;
    expect(formatBytes(num * 1024 * 1024)).toBe(`${num} MB`);
  });
  test('test 5 GB', () => {
    const num = 5;
    expect(formatBytes(num * 1024 * 1024 * 1024)).toBe(`${num} GB`);
  });
  test('test 7 TB', () => {
    const num = 7;
    expect(formatBytes(num * 1024 * 1024 * 1024 * 1024)).toBe(`${num} TB`);
  });
  test('test 9 PB', () => {
    const num = 9;
    expect(formatBytes(num * 1024 * 1024 * 1024 * 1024 * 1024)).toBe(
      `${num} PB`
    );
  });
});

describe('Test function formatNumberWithCommas decimals', () => {
  test('test 0 Bytes', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
  });
  test('test KB with decimals 2', () => {
    expect(formatBytes(11000)).toBe('10.74 KB'); // (11000/1024).toFixed(2) === '10.74'
  });
  test('test KB with decimals 2', () => {
    expect(formatBytes(250500)).toBe('244.63 KB'); // (250500/1024).toFixed(2) === '244.63'
  });
  test('test MB with decimals 2', () => {
    expect(formatBytes(3708800)).toBe('3.54 MB'); // (3708800/1024/1024).toFixed(2) === '3.54'
  });
  test('test MB with decimals 2', () => {
    expect(formatBytes(999999999)).toBe('953.67 MB'); // (999999999/1024/1024).toFixed(2) === '953.67'
  });
  test('test GB with decimals 2', () => {
    expect(formatBytes(999999999999)).toBe('931.32 GB'); // (999999999999/1024/1024/1024).toFixed(2) === '931.32'
  });
});
