export function throttle(func, wait = 1000) {
  let sum = 0;
  function eventFunc() {
    if (Date.now() - sum > wait) {
      func();
      sum = Date.now();
    }
  }
  return eventFunc;
}
