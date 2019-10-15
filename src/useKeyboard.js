/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useKeyboard(setTextPosition, textPassage, setErrArr) {
  const [activeKeys, setActiveKeys] = useState({});

  function keyDownHandler(e) {
    if (activeKeys[e.key]) return;
    if (e.key === 'Backspace') {
      setTextPosition(prevPosition => prevPosition - 1);
    } else if (e.key !== 'Shift') {
      setTextPosition(prevPosition => {
        const char = textPassage.charAt(prevPosition);
        if (char !== e.key) {
          setErrArr(prevErrArr => {
            const newErrArr = prevErrArr;
            newErrArr[prevPosition] = true;
            return newErrArr;
          });
        } else {
          setErrArr(prevErrArr => {
            const newErrArr = prevErrArr;
            newErrArr[prevPosition] = false;
            return newErrArr;
          });
        }
        return prevPosition + 1;
      });
    }
    setActiveKeys(prevActiveKeys => {
      const newActiveKeys = { ...prevActiveKeys };
      newActiveKeys[e.key] = true;
      return newActiveKeys;
    });
  }

  function keyUpHandler(e) {
    if (!activeKeys[e.key]) return;
    setActiveKeys(prevActiveKeys => {
      const newActiveKeys = { ...prevActiveKeys };
      newActiveKeys[e.key] = false;
      return newActiveKeys;
    });
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
