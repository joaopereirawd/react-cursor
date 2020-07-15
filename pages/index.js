import Cursor from '../components/cursor/cursor';
import MouseOver from '../components/cursor/mouseover';
import React, { useState } from 'react';

export default function Home() {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="container">
      <MouseOver mouseEnter={mouseEnter} />

      <Cursor />

      <div
        className={'mouse-reaction'}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >{'Mouse reaction'}</div>
      <style jsx global>{`
.cursor {
  border: 1px solid #8f6d4f;
  height: 56px;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 56px;
  z-index: 999;
}

.mouse-reaction {
  background: Red;
  height: 200px;
  position: relative;
  width: 200px;
}

      `}</style>
    </div>
  )
}
