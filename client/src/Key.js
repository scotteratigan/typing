import React, { useMemo } from 'react';
import './Key.scss';

export default function Key({ letter, active }) {
  return useMemo(() => {
    // console.log('letter: "' + letter + '"');
    return (
      <div
        className='keyboard-key'
        style={{
          color: active ? 'white' : 'black',
          backgroundColor: active ? 'blue' : 'white',
        }}>
        {letter === ' ' ? 'Spacebar' : letter}
      </div>
    );
  }, [active, letter]);
}
