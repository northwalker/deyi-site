// debounce.js
export const debounce = (callback, timeout = 1000) => {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...arg);
    }, timeout);
  };
};
