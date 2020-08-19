import { useState } from 'react';
import { objCheck } from '@/utilities';

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
