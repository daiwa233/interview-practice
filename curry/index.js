/**
 * 自动柯里化函数
 * ** NOTE ** 使用 Funciton.prototype.length 
 * @param {(...args) => unknown} fn 
 */

const curry = (fn) => {
  const _fn = (argArray = []) => (...args) => {
    const newArray = argArray.slice();
    newArray.push(...args);

    if (newArray.length >= fn.length) {
      fn.call(null, ...newArray);
      return null;
    } else {
      return _fn(newArray);
    }
  };

  return _fn();
};

export default curry;