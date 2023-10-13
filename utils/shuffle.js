// Fisher-Yates Shuffle
const shuffle = function (originArray, { inPlace = false } = {}) {
  const array = inPlace ? originArray : [...originArray];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  if (!inPlace) return array;
};

export default shuffle;
