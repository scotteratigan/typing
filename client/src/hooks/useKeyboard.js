/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useKeyboard(setTextPosition) {
  const [activeKeys, setActiveKeys] = useState({});

  function keyDownHandler(e) {
    if (!activeKeys[e.key]) {
      setTextPosition(prevPosition => prevPosition + 1);
      setActiveKeys(prevActiveKeys => {
        console.log('key is down:', e.key);
        const newActiveKeys = { ...prevActiveKeys };
        newActiveKeys[e.key] = true;
        return newActiveKeys;
      });
    }
  }

  function keyUpHandler(e) {
    if (activeKeys[e.key]) {
      setTextPosition(prevPosition => prevPosition + 1);
      setActiveKeys(prevActiveKeys => {
        console.log('key is down:', e.key);
        const newActiveKeys = { ...prevActiveKeys };
        newActiveKeys[e.key] = false;
        return newActiveKeys;
      });
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyDownHandler, keyUpHandler]);
  return activeKeys;
}
