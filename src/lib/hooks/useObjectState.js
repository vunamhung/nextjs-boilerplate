import { useState } from 'react';
import { isObj } from '@/lib/helpers';

const objCheck = (data) => {
  if (!isObj(data)) {
    throw new Error('`useObjectState` only accepts objects.');
  }

  return data;
};

export default function useObjectState(initialState = {}) {
  const [state, setState] = useState(() => objCheck(initialState));

  const mergeState = (objOrFxn) => {
    setState((prevState) => {
      const newState = objCheck(objOrFxn instanceof Function ? objOrFxn(prevState) : objOrFxn);
      return { ...prevState, ...newState };
    });
  };
  return [state, mergeState];
}
