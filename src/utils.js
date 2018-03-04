export const lens = key => object => object.key;

let id = 0;
export const uniqueId = (prefix = '', suffix = '') =>
  `${prefix}${++id}${suffix}`;
