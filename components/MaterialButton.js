// Button.js
'use client';
import { useRef, useState } from 'react';
const defaultButtonClasses =
  'relative cursor-pointer overflow-hidden rounded border border-white bg-transparent px-4 py-1 text-lg text-white outline-0 transition-all duration-500 [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary';
const rippleClasses = 'absolute rounded-full bg-primary/70 animate-ripple';

export default function MaterialButton({
  children,
  className: customClasses,
  ...props
}) {
  const [displayRipple, setDisplayRipple] = useState(false);
  const [rippleStyle, setRippleStyle] = useState({});
  const timeout = useRef(null);
  const handleRipple = (event) => {
    if (displayRipple) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    const newstyle = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${event.clientX - rect.left - radius}px`,
      top: `${event.clientY - rect.top - radius}px`,
    };

    setRippleStyle({ ...newstyle });
    setDisplayRipple(() => true);
    timeout.current = setTimeout(() => {
      setDisplayRipple(() => false);
    }, 400);
  };
  return (
    <button
      className={`${defaultButtonClasses} ${customClasses}`}
      onPointerDown={handleRipple}
      {...props}
    >
      {children}
      <span
        className={displayRipple ? rippleClasses : ''}
        style={{ ...rippleStyle }}
      />
    </button>
  );
}
