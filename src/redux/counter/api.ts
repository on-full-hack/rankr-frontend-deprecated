export const setCounterAsync = () =>
  new Promise<number>(resolve => {
    setTimeout(() => resolve(Math.random()), 1500);
  });
