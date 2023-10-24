// getRandomColor.js

export function getRandomColor() {
  const hexCode = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    // color += hexCode[Math.floor(Math.random() * 15)];
    color += hexCode[crypto.getRandomValues(new Uint32Array(10))[0] % 16];
  }
  return color;
}

export function colorHexToRGB(color = '#FFFFFF') {
  if (!color.match(/^(#{0,1}[0-9a-fA-F]{3,6})$/))
    throw Error('Unknown color parameter');
  let colorHex = color.charAt(0) === '#' ? color.slice(1) : color;
  if (colorHex.length === 3)
    colorHex = `${colorHex[0]}${colorHex[0]}${colorHex[1]}${colorHex[1]}${colorHex[2]}${colorHex[2]}`;

  const R = parseInt(colorHex.slice(0, 2), 16);
  const G = parseInt(colorHex.slice(2, 4), 16);
  const B = parseInt(colorHex.slice(4, 6), 16);
  return [R, G, B];
}

export function colorRGBToHex(color = [255, 255, 255]) {
  const R = Number(color[0]).toString(16).padStart(2, 0);
  const G = Number(color[1]).toString(16).padStart(2, 0);
  const B = Number(color[2]).toString(16).padStart(2, 0);
  return `#${R}${G}${B}`.toUpperCase();
}

export default getRandomColor;
