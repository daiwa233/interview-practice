/**
 * 自动柯里化函数
 * ** NOTE ** 使用 Funciton.prototype.length 
 * @param {(...args) => unknown} fn 
 */

const curry = (fn) => {
  let argSum = [];
  const _fn = (...args) => {
    argSum.push(...args);
    if (argSum.length >= fn.length) {
      fn(...argSum);
      return null;
    } else {
      return _fn;
    }
  }
  return (...args) => {
    argSum = [];
    return _fn(...args);
  };
} 

export default curry;