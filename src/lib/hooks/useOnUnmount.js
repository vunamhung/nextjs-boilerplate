import { useEffect } from 'react';

export default function useOnUnmount(onUnmount) {
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
}
