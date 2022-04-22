'use strict';

const contract = (fn, ...types) => (...args) => {
  const res = fn(...args);
  const inputTypes = types.slice(0, types.length - 1);
  const typeResult = types[types.length - 1];
  if (res !== typeResult(res)) {
    throw new Error('Types is not correct!');
  }
  for (let i = 0; i < inputTypes.length; i++) {
    if (args[i] !== inputTypes[i](args[i])) {
      throw new Error('Types is not correct!');
    }
  }
  return res;
};


module.exports = { contract };
