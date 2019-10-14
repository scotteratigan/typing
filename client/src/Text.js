import React from 'react';

export default function Text({ text, position }) {
  return (
    <div>
      {text.split('').map((char, i) => (
        <span key={i} style={{ textDecoration: i === position ? 'underline' : 'none' }}>
          {char}
        </span>
      ))}
    </div>
  );
}
