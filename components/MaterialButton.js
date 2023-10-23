// Button.js

'use client';

import { useRef, useState } from 'react';

export default function MaterialButton({ children, ...props }) {
  const [displayRipple, setDisplayRipple] = useState(false);
  const [rippleStyle, setRippleStyle] = useState({});
  const timeout = useRef(null);
  const rippleClasses = 'absolute rounded-full bg-white/70 animate-ripple';

  const handleRipple = (event) => {
    if (displayRipple) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const style = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${event.clientX - rect.left - radius}px`,
      top: `${event.clientY - rect.top - radius}px`,
    };
    setRippleStyle({ ...style });
    setDisplayRipple(() => true);
    timeout.current = setTimeout(() => {
      setDisplayRipple(() => false);
    }, 400);
  };
  return (
    <button
      className={
        'relative cursor-pointer overflow-hidden rounded border border-white bg-transparent px-4 py-1 text-lg text-white outline-0 transition-all duration-500 [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary'
      }
      onPointerDown={handleRipple}
      {...props}
    >
      {children}
      {displayRipple && (
        <span className={rippleClasses} style={{ ...rippleStyle }} />
      )}
    </button>
  );
}
