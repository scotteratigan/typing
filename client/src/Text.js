import React from 'react';
import './Text.scss';

const activeStyle = {
  borderBottom: '2px solid black',
};

const errorStyle = {
  backgroundColor: 'red',
};

export default function Text({ text, position, errArr }) {
  return (
    <div>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={i === position ? activeStyle : null}
          className={errArr[i] ? 'mistyped' : null}>
          {char}
        </span>
      ))}
    </div>
  );
}

// textDecoration: i === position ? 'underline' : 'none'
// border-bottom: 2px solid
