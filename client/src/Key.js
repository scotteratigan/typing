import React from 'react';

export default function Key({ letter, active }) {
  console.log('letter: "' + letter + '"');
  return (
    <div
      style={{
        margin: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        border: '1px solid grey',
        borderRadius: 4,
        display: 'inline-block',
        color: active ? 'white' : 'black',
        backgroundColor: active ? 'blue' : 'white',
        minWidth: 15,
        minHeight: '1rem',
      }}>
      {letter === ' ' ? 'Spacebar' : letter}
    </div>
  );
}
