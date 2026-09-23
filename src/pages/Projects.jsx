import '../styles/projects.css';

import { useState, useMemo, act } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS, CATEGORIES } from '../data/Projects';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import useEscapeKey from '../hooks/UseEscapeKey';
import { useSound } from '../context/SoundContext';

export default function Projects() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');
    const { playSound } = useSound();

    useEscapeKey(() => navigate('/'));
    const handleSelect = () => {
        playSound('click');
        navigate('/')
    }

    const visibleProjects = useMemo(() => {
        if (activeCategory === 'all') return PROJECTS;
        return PROJECTS.filter((p) => p.category === activeCategory);
    }, [activeCategory])

    return (
        <main className='projects'>
            <header className='projects__header'>
                <button
                    type='button'
                    className='projects__back'
                    onMouseEnter={() => playSound("hover")}
                    onClick={handleSelect}
                >
                    ◂ BACK TO TITLE
                </button>
                <h1 className='projects__title'>PROJECTS</h1>
                <span className='projects__count'>
                    {String(visibleProjects.length).padStart(2, '0')} CARTRIDGES
                </span>
            </header>

            <ProjectFilters
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
            />

            {visibleProjects.length > 0 ? (
                <div className='projects__grid'>
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p className='projects__empty'>
                    ▸ NO CARTRIDGES IN THIS CATEGORY
                </p>
            )}

            <footer className='projects__footer'>
                <span className='projects__location'>LOCATION: PROJECTS // EXPLORATION</span>
                <button
                    type="button"
                    className="projects__return"
                    onClick={() => navigate('/')}
                >
                    [ESC] RETURN ▸
                </button>
            </footer>
        </main>
    )
}