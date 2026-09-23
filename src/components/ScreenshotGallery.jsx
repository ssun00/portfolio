import { useState } from "react";
import Lightbox from "./Lightbox";

export default function ScreenshotGallery({ screenshots, color = 'pink' }) {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!screenshots || screenshots.length === 0) return null;

    const activeShot = activeIndex !== null ? screenshots[activeIndex] : null;

    const lightboxItem = activeShot ?
        {
            title: activeShot.caption || `SCREENSHOT ${activeIndex + 1}`,
            thumbnail: activeShot.src,
            fullImage: activeShot.src,
            tool: '',
            year: '',
        }
        : null;

    const goPrev = () => setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
    const goNext = () => setActiveIndex((i) => (i + 1) % screenshots.length);

    return (
        <section className="detail__section">
            <h2 className={`detail__section-label detail__section-label--${color}`}>
                ▸ SCREENSHOTS
            </h2>

            <div className={`screenshots screenshots--${color}`}>
                {screenshots.map((shot, i) => (
                    <button
                        key={i}
                        type="button"
                        className={`screenshots__item screenshots__item--${color}`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Open ${shot.alt || `screenshot ${i + 1}`}`}
                    >
                        <img
                            src={shot.src}
                            alt={shot.alt || ''}
                            className="screenshots__img"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>

            {activeShot && (
                <Lightbox
                    design={lightboxItem}
                    onClose={() => setActiveIndex(null)}
                    onPrev={goPrev}
                    onNext={goNext}
                    hasPrev={screenshots.length > 1}
                    hasNext={screenshots.length > 1}
                    counter={
                        screenshots.length > 1
                            ? `${String(activeIndex + 1).padStart(2, '0')} / ${String(screenshots.length).padStart(2, '0')}`
                            : null
                    }
                />
            )}
        </section>
    )
}