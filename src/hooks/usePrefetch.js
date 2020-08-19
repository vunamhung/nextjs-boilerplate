import { useEffect, useState } from 'react';
import lazy from 'lazy';

export default function usePrefetch(factory) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    factory();
    const comp = lazy(factory);
    setComponent(comp);
  }, [factory]);

  return component;
}
