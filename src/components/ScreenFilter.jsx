import { useEffect } from 'react';

export function ScreenFilter() {
  useEffect(() => {
    document.body.classList.add('scotch-container');

    return () => {
      document.body.classList.remove('scotch-container');
    };
  }, []);
}