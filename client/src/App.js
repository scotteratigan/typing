import React, { useState } from 'react';
import useKeyboard from './hooks/useKeyboard';
import Key from './Key';
import Text from './Text';
import './App.css';

const textPassage = 'A sly fox ran around or something...';
// todo: special handling for caps lock
// tab is also a special case, see here: https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click

function App() {
  const [textPosition, setTextPosition] = useState(0);
  const activeKeys = useKeyboard(setTextPosition);
  const row0 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row1 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
  const row2 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
  const row3 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];
  const row4 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control'];
  return (
    <div className='App'>
      <Text text={textPassage} position={textPosition} />
      <div>Text Position: {textPosition}</div>
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

export default App;
