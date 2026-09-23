import { useEffect, useRef } from 'react';

export default function Stars({ count = 40 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      if (Math.random() > 0.7) {
        star.style.background = '#F5F5FA';
      }
      container.appendChild(star);
    }
  }, [count]);

  return <div ref={containerRef} className="stars" aria-hidden="true" />;
}