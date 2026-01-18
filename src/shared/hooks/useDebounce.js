import { useEffect, useState, useRef } from 'react';

// Debounce hook - delays value updates until specified delay passes
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

    // Skip update if value hasn't changed
    if (currentSerialized === previousSerialized) return;

    previousValueRef.current = value;

    // Set debounced value after delay
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
