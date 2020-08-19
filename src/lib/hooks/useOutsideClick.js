import { useCallback, useEffect, useRef } from 'react';

export default function useOutsideClick(callback) {
  const ref = useRef(null);

  const handleClick = useCallback(
    ({ target }) => {
      const inside = ref.current?.contains(target);

      if (inside) return;

      callback();
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return ref;
}
