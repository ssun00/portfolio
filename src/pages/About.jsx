import '../styles/about.css'

import { useNavigate } from 'react-router-dom';
import { CHARACTER, BIO, STATS, EQUIPPED } from '../data/About';
import CharacterInfo from '../components/CharacterInfo';
import StatBars from '../components/StatsBars';
import EquippedTags from '../components/EquippedTags';
import QuestLog from '../components/QuestLog';
import useEscapeKey from '../hooks/UseEscapeKey';
import { useSound } from '../context/SoundContext';

function DialogueBox({ name, paragraphs }) {
    return (
        <div className="dialogue">
            <span className="dialogue__name-tab">▸ {name}</span>
            {paragraphs.map((para, i) => (
                <p
                    key={i}
                    className={`dialogue__para ${para.accent ? 'dialogue__para--accent' : ''}`}
                >
                    {para.text}
                </p>
            ))}
            <span className="dialogue__continue" aria-hidden="true">▼</span>
        </div>
    );
}

export default function About() {
    const navigate = useNavigate();
    useEscapeKey(() => navigate('/'));
    const { playSound } = useSound();

    const handleSelect = () => {
        playSound('click');
        navigate('/')
    }

    return (
        <main className='about'>
            <header className='about__header'>
                <button
                    type='button'
                    className='about__back'
                    onMouseEnter={() => playSound("hover")}
                    onClick={handleSelect}
                >
                    ◂ BACK TO TITLE
                </button>
                <h1 className="about__title">ABOUT</h1>
                <span className="about__file-no">SAVE FILE 01</span>
            </header>

            <div className='about__layout'>
                <aside className='about__sidebar'>
                    <div className='about__avatar-frame'>
                        <div className='about__avatar'>
                            <img src={CHARACTER.photo} alt={CHARACTER.name} className="about__avatar-img" />
                        </div>

                        <div className='about__avatar-name'>
                            {CHARACTER.name}
                        </div>
                        <div className="about__avatar-role">
                            ▸ {CHARACTER.role}
                        </div>
                    </div>
                    <CharacterInfo character={CHARACTER} />
                    <a
                        href="https://drive.google.com/file/d/1LEBpQLLYv1edZI5rvrYBN7k8nrFc1ThX/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="char-info__btn char-info__btn--primary"
                    >
                        ▸ VIEW RESUME
                    </a>
                </aside>

                <section className='about__main'>
                    <DialogueBox name={CHARACTER.name} paragraphs={BIO} />

                    <section className='about__section'>
                        <h2 className="about__section-label">▸ STATS</h2>
                        <StatBars stats={STATS} />
                    </section>

                    <section className='about__section'>
                        <h2 className="about__section-label">▸ EQUIPPED</h2>
                        <EquippedTags items={EQUIPPED} />
                    </section>

                    <section className='about__section'>
                        <h2 className="about__section-label">▸ QUEST LOG</h2>
                        <QuestLog />
                    </section>
                </section>
            </div>

            <footer className="about__footer">
                <span className="about__location">LOCATION: ABOUT / CHARACTER INFO</span>
                <button
                    type="button"
                    className="about__return"
                    onClick={() => navigate('/')}
                >
                    [ESC] RETURN ▸
                </button>
            </footer>
        </main>
    )
}