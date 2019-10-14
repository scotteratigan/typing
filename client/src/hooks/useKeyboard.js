/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useKeyboard(setTextPosition) {
  const [activeKeys, setActiveKeys] = useState({});

  function keyDownHandler(event) {
    // event.location = 1 for left shift and 2 for right shift
    const { key } = event;
    // console.log(event.location);
    if (!activeKeys[key]) {
      setTextPosition(prevPosition => prevPosition + 1);
      console.log('key is down:', key);
      const newActiveKeys = { ...activeKeys };
      newActiveKeys[key] = true;
      setActiveKeys(newActiveKeys);
    }
  }

  function keyUpHandler({ key }) {
    // console.log('key is up:', key);
    if (activeKeys[key]) {
      const newActiveKeys = { ...activeKeys };
      newActiveKeys[key] = false;
      setActiveKeys(newActiveKeys);
    }
    // console.log(activeKeys);
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
