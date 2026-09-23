import githubIcon from '../assets/github.png';
import githubHover from '../assets/github-hover.png';
import instagramIcon from '../assets/instagram.png';
import instagramHover from '../assets/instagram-hover.png';
import linkedinIcon from '../assets/linkedin.png';
import linkedinHover from '../assets/linkedin-hover.png';
import { useSound } from '../context/SoundContext';

const SOCIALS = [
    { name: 'Instagram', href: 'https://www.instagram.com/lazesoble?igshid=OGQ5ZDc2ODk2ZA%3D%3D', src: instagramIcon, hover: instagramHover },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sun-sophie/', src: linkedinIcon, hover: linkedinHover },
    { name: 'GitHub', href: 'https://github.com/ssun00', src: githubIcon, hover: githubHover },
];

export default function SocialIcons() {
    const { playSound } = useSound();

    return (
        <div className="home__socials">
            {SOCIALS.map(({ name, href, src, hover }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="home__social"
                    onMouseEnter={() => playSound('hover')}
                    onClick={() => playSound('click')}
                >
                    <img src={src} alt="" className="home__social-img home__social-img--default" />
                    <img src={hover} alt="" className="home__social-img home__social-img--hover" aria-hidden="true" />
                </a>
            ))}
        </div>
    );
}