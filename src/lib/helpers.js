export function isArr(data) {
  return Object.prototype.toString.call(data) === '[object Array]';
}

export function isObj(data) {
  return Object.prototype.toString.call(data) === '[object Object]';
}
