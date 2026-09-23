import '../styles/cat-easter-egg.css';

import { useState, useEffect, useCallback } from 'react';
import catPhoto1 from '../assets/cats/bepo_1.jpeg';
import catPhoto2 from '../assets/cats/bepo_2.jpeg';
import catPhoto3 from '../assets/cats/bepo_3.jpeg';
import catPhoto4 from '../assets/cats/bepo.jpeg'
import catPhoto5 from '../assets/cats/menchi.jpeg'
import catPhoto6 from '../assets/cats/menchi_1.JPG'
import catPhoto7 from '../assets/cats/menchi_2.jpeg'
import catPhoto8 from '../assets/cats/menchi_3.PNG'
import catPhoto9 from '../assets/cats/menchi_4.jpeg'


const CAT_PHOTOS = [catPhoto1, catPhoto2, catPhoto3, catPhoto4, catPhoto5, catPhoto6, catPhoto7, catPhoto8, catPhoto9];

function PawIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 10 10" shapeRendering="crispEdges">
            <rect x="1" y="2" width="2" height="2" fill="currentColor" />
            <rect x="4" y="1" width="2" height="2" fill="currentColor" />
            <rect x="7" y="2" width="2" height="2" fill="currentColor" />
            <rect x="2" y="5" width="6" height="4" fill="currentColor" />
        </svg>
    );
}

export default function CatEasterEgg() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);
    const close = useCallback(() => setIsOpen(false), []);

    const openRandom = useCallback(() => {
        const pick = CAT_PHOTOS[Math.floor(Math.random() * CAT_PHOTOS.length)];
        setActivePhoto(pick);
        setIsOpen(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                close();
            }
        };
        window.addEventListener('keydown', handleKeyDown, true);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown, true);
            document.body.style.overflow = '';
        };
    }, [isOpen, close]);

    return (
        <>
            <button
                type="button"
                className="paw-fab"
                onClick={openRandom}
                aria-label="???"
            >
                <PawIcon />
            </button>

            {isOpen && activePhoto && (
                <div className="paw-modal" role="dialog" aria-modal="true" onClick={close}>
                    <div className="paw-modal__card" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="paw-modal__close"
                            onClick={close}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <div className="paw-modal__frame">
                            <img src={activePhoto} alt="My cat" className="paw-modal__img" />
                        </div>
                        <p className="paw-modal__caption">▸ YOU FOUND MY CAT</p>
                    </div>
                </div>
            )}
        </>
    );
}