import { useEffect } from 'react';

export default function Lightbox({
  design,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  counter,
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        e.stopPropagation();
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        e.stopPropagation();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKey, true);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey, true);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!design) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Inspecting ${design.title}`}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close inspect view"
      >
        [ESC] CLOSE ✕
      </button>

      {hasPrev && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous screenshot"
        >
          ◂
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next screenshot"
        >
          ▸
        </button>
      )}

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__image-frame">
          {design.fullImage || design.thumbnail ? (
            <img
              src={design.fullImage || design.thumbnail}
              alt={design.title}
              className="lightbox__image"
            />
          ) : (
            <div className="lightbox__placeholder">
              ▸ NO IMAGE LOADED
            </div>
          )}
        </div>
        <div className="lightbox__caption">
          <span className="lightbox__title">{design.title}</span>
          {(design.tool || design.year) && (
            <span className="lightbox__meta">
              {[design.tool, design.year].filter(Boolean).join(' · ')}
            </span>
          )}
          {counter && <span className="lightbox__counter">{counter}</span>}
        </div>
      </div>
    </div>
  );
}