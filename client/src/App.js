import React, { useEffect, useState } from 'react';
import useKeyboard from './hooks/useKeyboard';
import Key from './Key';
import Text from './Text';
import './App.css';

const textPassage =
  'Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived, and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting-place for those who here gave their lives, that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate, we can not consecrate we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion - that we here highly resolve that these dead shall not have died in vain that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.';
// todo: special handling for caps lock
// tab is also a special case, see here: https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click
// const errArr = new Array(textPassage.length).fill(false);

function App() {
  const [textPosition, setTextPosition] = useState(0);
  const [startTime, setStartTime] = useState(() => new Date());
  const [wpm, setWPM] = useState(0);
  const [errArr, setErrArr] = useState(() => new Array(textPassage.length).fill(false));
  const activeKeys = useKeyboard(setTextPosition, textPassage, setErrArr);
  const row0 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row1 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
  const row2 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
  const row3 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];
  const row4 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control'];

  useEffect(() => {
    const currentTime = new Date();
    const elapsedTimeSeconds = (currentTime - startTime) / 1000;
    const charsPerSecond = textPosition / elapsedTimeSeconds;
    const wordsPerMinute = (charsPerSecond * 60) / 5; // 5 chars per 'word'
    setWPM(wordsPerMinute);
  }, [startTime, textPosition]);

  return (
    <div className='App'>
      <button
        type='button'
        onClick={() => {
          const time = new Date();
          console.log('startTime set to:', time);
          setStartTime(time);
        }}>
        Start
      </button>
      <div>WPM: {wpm.toFixed(1)}</div>
      <Text text={textPassage} position={textPosition} errArr={errArr} />
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
