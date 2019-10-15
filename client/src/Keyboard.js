import React from 'react';
import Key from './Key';

export default function Keyboard({ activeKeys }) {
  const row0 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row1 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
  const row2 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
  const row3 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];
  const row4 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control'];
  // console.log('rendering keyboard');
  return (
    <div>
      <div>
        {row0.map(letter => (
          <Key letter={letter} active={activeKeys[letter]} key={letter} />
        ))}
      </div>
      <div>
        {row1.map(letter => (
          <Key letter={letter} active={activeKeys[letter]} key={letter} />
        ))}
      </div>
      <div>
        {row2.map(letter => (
          <Key letter={letter} active={activeKeys[letter]} key={letter} />
        ))}
      </div>
      <div>
        {row3.map((letter, i) => (
          <Key letter={letter} active={activeKeys[letter]} key={letter + '-' + i} />
        ))}
      </div>
      <div>
        {row4.map((letter, i) => (
          <Key letter={letter} active={activeKeys[letter]} key={letter + '-' + i} />
        ))}
      </div>
    </div>
  );
}
