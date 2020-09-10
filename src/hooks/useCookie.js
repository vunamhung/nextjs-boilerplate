import { useState } from 'react';
import { set, get } from 'js-cookie';

/**
 * useCookie - React Hook for Cookies based on js-cookie
 * @param {string} key Cookie name
 * @param {Object|string} [initialValue]  Value will be assign if cookie doesn't exist.
 * @returns {Array} Returns cookie value, and the function to update it.
 */
export default function useCookie(key, initialValue) {
  const [item, setInnerValue] = useState(() => get(key) || initialValue);

  /**
   * Set value of cookie
   * @param {Object|string} value
   * @param {Cookies.CookieAttributes} [options]
   */
  const setValue = (value, options) => {
    setInnerValue(value);
    set(key, value, options);
  };

  return [item, setValue];
}
