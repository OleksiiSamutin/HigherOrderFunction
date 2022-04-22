'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    const value = obj[key];
    callback(key, value, obj);
  }
  return undefined;
};

module.exports = { iterate };
