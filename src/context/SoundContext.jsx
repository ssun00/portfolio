import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import hoverSrc from '../assets/sounds/hover.ogg';
import clickSrc from '../assets/sounds/click.ogg';

const STORAGE_KEY = 'portfolio:muted';

const SoundContext = createContext({
  playSound: () => { },
  muted: false,
  toggleMute: () => { },
});

export function useSound() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === null ? true : stored === 'true';
    } catch {
      return true;
    }
  });

  const sounds = useRef({});

  useEffect(() => {
    sounds.current = {
      hover: new Audio(hoverSrc),
      click: new Audio(clickSrc),
    };
    sounds.current.hover.volume = 0.2;
    sounds.current.click.volume = 0.35;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(muted));
    } catch {
    }
  }, [muted]);

  const playSound = useCallback(
    (name) => {
      if (muted) return;
      const audio = sounds.current[name];
      if (!audio) return;

      audio.currentTime = 0;
      audio.play().catch(() => { });
    },
    [muted]
  );

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  return (
    <SoundContext.Provider value={{ playSound, muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
}