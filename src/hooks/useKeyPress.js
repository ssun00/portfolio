import { useEffect } from 'react';

export default function useKeyPress(keys, callback, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
 
    const keyList = Array.isArray(keys) ? keys : [keys];
 
    const handleKey = (e) => {
      if (keyList.includes(e.key)) {
        callback(e);
      }
    };
 
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [keys, callback, enabled]);
}