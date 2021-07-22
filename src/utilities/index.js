export function isArr(data) {
  return Object.prototype.toString.call(data) === '[object Array]';
}

export function isObj(data) {
  return Object.prototype.toString.call(data) === '[object Object]';
}

export function objCheck(data) {
  if (!isObj(data)) {
    throw new Error('`useObjectState` only accepts objects.');
  }

  return data;
}
