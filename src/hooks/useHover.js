import { useState } from 'react';

/**
 * useHover custom hook
 *
 * @example
 * const ExampleUseHover = () => {
 *   const {hovered, bind} = useHover();
 *   return( <div> <p>this is input is : {hovered ? 'hovered' : 'not hovered'}</p> <input {...bind}  /> </div> );
 * };
 *
 * @returns {{bind: {onMouseEnter: (function(): void), onMouseLeave: (function(): void)}, hovered: boolean}}
 */
export default function useHover() {
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
}
