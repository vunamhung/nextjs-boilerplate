import { useCallback, useEffect, useRef } from "react";

export default function useOutsideClick(callback) {
  const ref = useRef(null);

  const handleClick = useCallback(
    (e) => {
      const inside = ref.current?.contains(e.target);

      if (inside) return;

      callback();
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref;
}
