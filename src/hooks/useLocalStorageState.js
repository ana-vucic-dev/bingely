import { useEffect, useState } from 'react';

export default function useLocalStorageState(initialState, key) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
