import React from 'react';
import TextChar from './TextChar';
import './Text.scss';

export default function Text({ textArr, position, errArr }) {
  return (
    <div className='text-to-type'>
      <div className='passage-title'>Gettysberg Address:</div>
      {textArr.map((char, i) => (
        <TextChar char={char} key={i} isActive={i === position} isTypo={errArr[i]} />
      ))}
      <div className='passage-attribution'>- President Lincoln, November 19, 1863</div>
    </div>
  );
}
