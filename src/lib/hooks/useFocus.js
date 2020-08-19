import { useState } from 'react';

/**
 * useFocus custom hook
 *
 * @example
 * const ExampleUseFocus = () => {
 *   const {hovered, bind} = useFocus();
 *   return( <div> <p>this is input is : {focused ? 'focused' : 'not focused'}</p> <input {...bind}  /> </div> );
 * };
 *
 * @returns {{bind: {onBlur: (function(): void), onFocus: (function(): void)}, focused: boolean}}
 */
export default function useFocus() {
  const [focused, set] = useState(false);
  return {
    focused,
    bind: {
      onFocus: () => set(true),
      onBlur: () => set(false),
    },
  };
}
