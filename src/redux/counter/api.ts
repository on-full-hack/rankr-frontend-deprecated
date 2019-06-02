export const setCounterAsync = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(Math.random()), 1500);
  });
