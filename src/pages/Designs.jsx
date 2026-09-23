import '../styles/designs.css';

import { useState, useMemo, act } from 'react';
import { useNavigate } from 'react-router-dom';
import { DESIGNS, CATEGORIES } from '../data/Designs';
import ProjectFilters from '../components/ProjectFilters';
import InventorySlot, { EmptySlot } from '../components/InventorySlot';
import DesignDetail from '../components/DesignDetail';
import Lightbox from '../components/Lightbox';
import useEscapeKey from '../hooks/useEscapeKey';
import { useSound } from '../context/SoundContext';

const GRID_COLS = 4;
const MIN_ROWS = 4;

export default function Designs() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedId, setSelectedId] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const { playSound } = useSound();

    useEscapeKey(() => navigate('/'), !lightboxOpen);
    const handleSelect = () => {
        playSound('click');
        navigate('/')
    }

    const visibleDesigns = useMemo(() => {
        if (activeCategory === "all") return DESIGNS;
        return DESIGNS.filter((d) => d.category === activeCategory);
    }, [activeCategory]);

    const selectedDesign = useMemo(() => {
        return DESIGNS.find((d) => d.id === selectedId) || null;
    }, [selectedId]);

    const minSlots = GRID_COLS * MIN_ROWS;
    const emptyCount = Math.max(0, minSlots - visibleDesigns.length);

    return (
        <main className='designs'>
            <header className='designs__header'>
                <button
                    type='button'
                    className='designs__back'
                    onMouseEnter={() => playSound("hover")}
                    onClick={handleSelect}
                >
                    ◂ BACK TO TITLE
                </button>
                <h1 className="designs__title">DESIGNS</h1>
                <span className="designs__count">
                    {String(visibleDesigns.length).padStart(2, '0')} / {String(minSlots).padStart(2, '0')} SLOTS
                </span>
            </header>

            <div className='designs__layout'>
                <div className='designs__grid-column'>
                    <ProjectFilters
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        onChange={(id) => {
                            setActiveCategory(id);
                            setSelectedId(null);
                        }}
                    />

                    <div className='designs__grid'>
                        {visibleDesigns.map((design) => (
                            <InventorySlot
                                key={design.id}
                                design={design}
                                isSelected={selectedId === design.id}
                                onClick={() => setSelectedId(design.id)}
                            />
                        ))}
                        {Array.from({ length: emptyCount }).map((_, i) => (
                            <EmptySlot key={`empty-${i}`} />
                        ))}
                    </div>
                </div>

                <aside className='designs__detail-column'>
                    <DesignDetail
                        design={selectedDesign}
                        onInspect={() => setLightboxOpen(true)}
                    />
                </aside>
            </div>

            <footer className='designs__footer'>
                <span className="designs__location">LOCATION: DESIGNS / INVENTORY</span>
                <button
                    type="button"
                    className="designs__return"
                    onClick={() => navigate('/')}
                >
                    [ESC] RETURN ▸
                </button>
            </footer>

            {lightboxOpen && (
                <Lightbox
                    design={selectedDesign}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </main>
    )
}