import React, { useState } from 'react';
import useKeyboard from './useKeyboard';
import Keyboard from './Keyboard';
import Text from './Text';
import Stats from './Stats';
import './App.scss';
import Footer from './Footer';

const textPassage =
  'Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived, and so dedicated, can long endure.';

// tab is causing a focus issue, see here: https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click
const textArr = textPassage.split('');

function App() {
  const [textPosition, setTextPosition] = useState(0);
  const [startTime] = useState(() => new Date());
  const [errArr, setErrArr] = useState(() => new Array(textPassage.length).fill(false));
  const activeKeys = useKeyboard(setTextPosition, textPassage, setErrArr);

  return (
    <div className='App'>
      <h1>React Typing Tester</h1>
      <h4>A performant hooks app.</h4>
      <h5>To begin, simply start typing.</h5>
      <Stats startTime={startTime} textPosition={textPosition} errArr={errArr} />
      <Text textArr={textArr} position={textPosition} errArr={errArr} />
      <Keyboard activeKeys={activeKeys} />
      <Footer />
    </div>
  );
}

export default App;
