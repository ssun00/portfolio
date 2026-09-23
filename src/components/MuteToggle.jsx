import { useSound } from '../context/SoundContext';

function SpeakerOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="3" width="2" height="4" fill="currentColor" />
      <rect x="3" y="2" width="1" height="6" fill="currentColor" />
      <rect x="4" y="1" width="1" height="8" fill="currentColor" />
      <rect x="6" y="3" width="1" height="1" fill="currentColor" />
      <rect x="6" y="6" width="1" height="1" fill="currentColor" />
      <rect x="7" y="2" width="1" height="1" fill="currentColor" />
      <rect x="7" y="7" width="1" height="1" fill="currentColor" />
      <rect x="8" y="3" width="1" height="4" fill="currentColor" />
    </svg>
  );
}

function SpeakerMutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="3" width="2" height="4" fill="currentColor" />
      <rect x="3" y="2" width="1" height="6" fill="currentColor" />
      <rect x="4" y="1" width="1" height="8" fill="currentColor" />
      <rect x="6" y="2" width="1" height="1" fill="currentColor" />
      <rect x="7" y="3" width="1" height="1" fill="currentColor" />
      <rect x="8" y="4" width="1" height="2" fill="currentColor" />
      <rect x="7" y="6" width="1" height="1" fill="currentColor" />
      <rect x="6" y="7" width="1" height="1" fill="currentColor" />
      <rect x="8" y="2" width="1" height="1" fill="currentColor" />
      <rect x="7" y="4" width="1" height="2" fill="currentColor" />
      <rect x="6" y="6" width="1" height="1" fill="currentColor" />
      <rect x="8" y="7" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

export default function MuteToggle() {
  const { muted, toggleMute } = useSound();

  return (
    <button
      type="button"
      className="mute-toggle"
      onClick={toggleMute}
      aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
      aria-pressed={muted}
    >
      {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
    </button>
  );
}