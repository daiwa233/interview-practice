/**
 * 写一个 mySetInterVal(fn, a, b),
 * 每次间隔 a,a+b,a+2b, ... a+nb 的时间，
 * 然后写一个 myClear，
 * 停止上面的 mySetInterVal
 */
const mySetInterVal = (fn, a, b) => {
  let n = 0;
  const loop = () => {
    const timeout = a + n * b;
    n++;
    return setTimeout(() => {
      loop();
      fn();
    }, timeout);
  };
  const id = loop();

  return () => {
    clearTimeout(id);
  }
};

export default mySetInterVal;