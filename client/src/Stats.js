import React, { useEffect, useState } from 'react';
import './Stats.scss';

export default function Stats({ startTime, textPosition, errArr }) {
  const [wpm, setWPM] = useState(0);
  const [errRate, setErrRate] = useState(0);
  useEffect(() => {
    const currentTime = new Date();
    const elapsedTimeSeconds = (currentTime - startTime) / 1000;
    const charsPerSecond = textPosition / elapsedTimeSeconds;
    const wordsPerMinute = (charsPerSecond * 60) / 5; // 5 chars per 'word'
    setWPM(wordsPerMinute);
  }, [startTime, textPosition]);
  useEffect(() => {
    if (textPosition === 0) return setErrRate(0);
    const totalErrors = errArr.reduce((total, val) => (val ? (total += 1) : total), 0);
    const newErrRate = totalErrors / textPosition;
    if (newErrRate > 100) return setErrRate(100);
    setErrRate(newErrRate);
  }, [errArr, textPosition]);
  return (
    <div className='stats'>
      <div>Typing Statistics:</div>
      <div>WPM: {wpm.toFixed(1)}</div>
      <div>Error Rate: {(errRate * 100).toFixed(1)}%</div>
      <div>eWPM: {(wpm * (1 - errRate)).toFixed(1)}</div>
    </div>
  );
}
