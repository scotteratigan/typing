import React, { useMemo } from 'react';
import './TextChar.scss';

export default function TextChar({ isActive, isTypo, char }) {
  let classList = '';
  if (isActive) classList = 'active-text';
  if (isTypo) classList += ' mistyped';
  return useMemo(() => <span className={classList}>{char}</span>, [char, classList]);
}
