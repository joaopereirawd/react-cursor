import { TweenMax } from 'gsap';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const MouseHover = props => {
  useEffect(() => {
    if (props.mouseEnter) {
      TweenMax.to('.cursor', 0.5, {
        background: '#8f6d4f',
        opacity: 1,
        rotate: 0,
        scale: 0.40
      });
    } else {
      TweenMax.to('.cursor', 0.5, {
        background: 'transparent',
        opacity: 1,
        rotate: '45deg',
        scale: 1
      });
    }
  });

  return (
    <></>
  );
};

MouseHover.propTypes = {
  mouseEnter: PropTypes.bool.isRequired
};

export default MouseHover;

