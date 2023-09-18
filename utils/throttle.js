export const throttle = (callback, timeout = 500) => {
  let timer;
  return (...arg) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(...arg);
      timer = null;
    }, timeout);
  };
};
