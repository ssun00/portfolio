import './styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Designs from './pages/Designs';
import Scanlines from './components/Scanlines';
import ParallaxGrid from './components/ParallaxGrid';
import Stars from './components/Stars';
import { SoundProvider } from './context/SoundContext';
import MuteToggle from './components/MuteToggle';
import CatEasterEgg from './components/CatEasterEgg';

export default function App() {
  return (
    <SoundProvider>
      <BrowserRouter>
        <ParallaxGrid />
        <Stars count={40} />
        <Scanlines />
        <MuteToggle />
        <CatEasterEgg />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/designs" element={<Designs />} />
        </Routes>
      </BrowserRouter>
    </SoundProvider>
  );
}