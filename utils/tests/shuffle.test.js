import shuffle from '../shuffle.js';

describe('Test function shuffle', () => {
  test('shuffle length', () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledAry = shuffle(ary);
    expect(shuffledAry.length).toBe(ary.length);
  });
  test('shuffle all element shpped', () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledAry = shuffle(ary);
    const filteredAry = shuffledAry.filter((item) => ary.indexOf(item) === -1);
    expect(filteredAry.length).toBe(0);
  });
  test('shuffle change order', () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledAry = shuffle(ary);
    expect(ary).not.toEqual(shuffledAry);
  });
  test('shuffle in-place equal', () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(ary, { inPlace: true });
    expect(ary).toEqual(ary);
  });
});
