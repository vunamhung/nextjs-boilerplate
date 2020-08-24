import { curry, apply } from 'ramda';

/**
 * Debounce
 *
 * @param {Boolean} immediate If true run `fn` at the start of the timeout
 * @param  timeMs {Number} Debounce timeout
 * @param  fn {Function} Function to debounce
 *
 * @return {Number} timeout
 * @example
 *
 *		const say = (x) => console.log(x)
 *		const debouncedSay = _debounce(false, 1000, say)();
 *
 *		debouncedSay("1")
 *		debouncedSay("2")
 *		debouncedSay("3")
 *
 */
const _debounce = curry((immediate, fn, timeMs) => () => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;

      if (!immediate) {
        apply(fn, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, timeMs);

    if (callNow) {
      apply(fn, args);
    }

    return timeout;
  };
});

export const debounceImmediate = _debounce(true);

export const debounce = _debounce(false);
