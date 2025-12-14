// useDebounce.js
import { useEffect, useState, useRef } from 'react';

export default function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  const previousValueRef = useRef();

  useEffect(() => {
    // Serialize value for comparison (handles objects, arrays, primitives)
    const serialize = (val) => {
      if (val === null || val === undefined) return String(val);
      if (typeof val === 'object') {
        try {
          return JSON.stringify(val);
        } catch {
          return String(val);
        }
      }
      return String(val);
    };

    const currentSerialized = serialize(value);
    const previousSerialized = previousValueRef.current
      ? serialize(previousValueRef.current)
      : null;

    // Only update if value actually changed
    if (currentSerialized === previousSerialized) return;

    previousValueRef.current = value;

    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
