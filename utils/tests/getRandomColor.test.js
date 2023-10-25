import {
  colorHexToRGB,
  colorRGBToHex,
  getRandomColor,
} from '../getRandomColor.js';

describe('Test function colorHexToRGB', () => {
  test('test colorHexToRGB #FFF', () => {
    const result = colorHexToRGB('#FFF');
    expect(result).toStrictEqual([255, 255, 255]);
  });
  test('test colorHexToRGB #FFFFFF', () => {
    const result = colorHexToRGB('#FFFFFF');
    expect(result).toStrictEqual([255, 255, 255]);
  });
  test('test colorHexToRGB #000000', () => {
    const result = colorHexToRGB('#000000');
    expect(result).toStrictEqual([0, 0, 0]);
  });
  test('test colorHexToRGB #0088FF', () => {
    const result = colorHexToRGB('#0088FF');
    expect(result).toStrictEqual([0, 136, 255]);
  });
  test('test colorHexToRGB #0000FF', () => {
    const result = colorHexToRGB('#0000FF');
    expect(result).toStrictEqual([0, 0, 255]);
  });
  test('test colorHexToRGB #00FF00', () => {
    const result = colorHexToRGB('#00FF00');
    expect(result).toStrictEqual([0, 255, 0]);
  });
  test('test colorHexToRGB #FF0000', () => {
    const result = colorHexToRGB('#FF0000');
    expect(result).toStrictEqual([255, 0, 0]);
  });
  test('test colorHexToRGB without #', () => {
    const result = colorHexToRGB('C8C8C8');
    expect(result).toStrictEqual([200, 200, 200]);
  });
  test('test colorHexToRGB error input', () => {
    expect(() => {
      colorHexToRGB('A');
    }).toThrow();
  });
});
describe('Test function colorRGBToHex', () => {
  test('test colorHexToRGB #FFFFFF', () => {
    const result = colorRGBToHex([255, 255, 255]);
    expect(result).toBe('#FFFFFF');
  });
  test('test colorHexToRGB #000000', () => {
    const result = colorRGBToHex([0, 0, 0]);
    expect(result).toBe('#000000');
  });
  test('test colorHexToRGB #0088FF', () => {
    const result = colorRGBToHex([0, 136, 255]);
    expect(result).toBe('#0088FF');
  });
  test('test colorHexToRGB #0000FF', () => {
    const result = colorRGBToHex([0, 0, 255]);
    expect(result).toBe('#0000FF');
  });
  test('test colorHexToRGB #00FF00', () => {
    const result = colorRGBToHex([0, 255, 0]);
    expect(result).toBe('#00FF00');
  });
  test('test colorHexToRGB #FF0000', () => {
    const result = colorRGBToHex([255, 0, 0]);
    expect(result).toBe('#FF0000');
  });
});

describe('Test function getRandomColor', () => {
  test('test getRandomColor format', () => {
    const randomColor = getRandomColor();
    expect(randomColor).toMatch(/^(#{0,1}[0-9a-fA-F]{6})$/);
  });
  test('test getRandomColor Hex equal RBG', () => {
    const randomColor = getRandomColor();
    const colorRGB = colorHexToRGB(randomColor);
    const colorHex = colorRGBToHex(colorRGB);
    expect(randomColor).toBe(colorHex);
  });
});
