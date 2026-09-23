import '../styles/home.css';

import { useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useSound } from "../context/SoundContext";

const MENU = [
    { label: 'START EXPLORING', path: '/projects' },
    { label: 'CHARACTER INFO', path: '/about' },
    { label: 'INVENTORY', path: '/designs' },
];

export default function Home() {
    const navigate = useNavigate();
    const { playSound } = useSound();

    const handleSelect = (path) => {
        playSound('click');
        navigate(path);
    };

    return (
        <main className="home">
            <h1 className="home__title">PORTFOLIO</h1>

            <p className="home__subtitle">SOPHIE SUN // SOFTWARE DEVELOPER</p>

            <ul className="home__menu">
                {MENU.map(({ label, path }) => (
                    <li key={label}>
                        <button
                            type="button"
                            className="home__menu-item"
                            onClick={() => handleSelect(path)}
                            onMouseEnter={() => playSound('hover')}
                            onFocus={() => playSound('hover')}
                        >
                            <span className="home__menu-inner">
                                <span className="home__menu-arrow">▸</span>
                                <span className="home__menu-label">{label}</span>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            <SocialIcons />
        </main>
    )
}