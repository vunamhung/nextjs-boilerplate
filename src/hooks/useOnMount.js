import { useEffect } from 'react';

export default function useOnMount(onMount) {
  useEffect(() => {
    onMount && onMount();
  }, []);
}
