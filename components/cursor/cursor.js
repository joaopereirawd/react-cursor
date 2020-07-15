/**
 * Module dependencies.
 */
import { TweenMax } from 'gsap';
import { useMousePosition } from './use-mouse-position';
import React, { useEffect, useRef } from 'react';

/**
 * `Cursor`.
 */

const Cursor = () => {
  const position = useMousePosition();
  const ref = useRef();

  useEffect(() => {
    /* eslint-disable */
    TweenMax.to([ref.current], 1, {
      opacity: 1,
      rotate: '45deg',
      x: position.xPos - 28,
      y: position.yPos - 28
    });
    /* eslint-enable */
  });

  return (
    <>
      <div
        className={'cursor'}
        ref={ref}
      />
    </>
  );
};

/**
 * Export `Cursor`.
 */

export default Cursor;
