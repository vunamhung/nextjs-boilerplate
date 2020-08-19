import { useState, useCallback } from 'react';

export default function useEventTarget(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(({ target }) => setValue(target.value), []); // reusable value fetch logic
  const reset = useCallback(() => setValue(initialValue), [initialValue]); // reusable reset logic

  return [value, { onChange, reset }];
}
