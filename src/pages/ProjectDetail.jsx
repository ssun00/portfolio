import '../styles/project-detail.css'

import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useCallback, useEffect } from "react";
import { PROJECTS } from "../data/Projects";
import useEscapeKey from '../hooks/useEscapeKey';
import useKeyPress from '../hooks/useKeyPress';
import ScreenshotGallery from '../components/ScreenshotGallery';

function StatRow({ label, value, highlight = false, color = 'pink' }) {
  return (
    <div className={`detail__stat-row detail__stat-row--${color}`}>
      <span className="detail__stat-label">{label}</span>
      <span className={`detail__stat-value ${highlight ? `detail__stat-value--highlight detail__stat-value--highlight-${color}` : ''}`}>
        {highlight && '● '}{value}
      </span>
    </div>
  );
}

function CartridgeDisplay({ project }) {
  return (
    <div className={`detail-cart detail-cart--${project.color}`}>
      <div className="detail-cart__notch" aria-hidden="true" />
      <div className="detail-cart__label">
        <div className="detail-cart__thumbnail">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt="" />
          ) : (
            <PlaceholderSprite color={project.color} />
          )}
        </div>
        <div className="detail-cart__title">{project.title}</div>
        <div className="detail-cart__subtitle">{project.subtitle}</div>
      </div>
    </div>
  );
}

function PlaceholderSprite({ color }) {
  const fill = color === 'purple' ? '#C4A7FF' : '#FF6BAE';
  const accent = color === 'purple' ? '#9D5CFF' : '#FF2E88';
  return (
    <svg width="100" height="80" viewBox="0 0 20 16" shapeRendering="crispEdges">
      <rect x="4" y="4" width="3" height="3" fill={fill} />
      <rect x="13" y="4" width="3" height="3" fill={fill} />
      <rect x="4" y="10" width="12" height="2" fill={accent} />
      <rect x="6" y="11" width="2" height="1" fill="#0A0A0F" />
      <rect x="12" y="11" width="2" height="1" fill="#0A0A0F" />
    </svg>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEscapeKey(() => navigate('/projects'));

  const { project, prevProject, nextProject, index } = useMemo(() => {
    const i = PROJECTS.findIndex((p) => p.id === id);
    if (i === -1) {
      return { project: null, prevProject: null, nextProject: null, index: -1 };
    }
    return {
      project: PROJECTS[i],
      prevProject: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
      nextProject: PROJECTS[(i + 1) % PROJECTS.length],
      index: i,
    };
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleArrow = useCallback(
    (e) => {
      if (!project) return;
      if (e.key === 'ArrowLeft' && prevProject) {
        navigate(`/projects/${prevProject.id}`);
      } else if (e.key === 'ArrowRight' && nextProject) {
        navigate(`/projects/${nextProject.id}`);
      }
    },
    [project, prevProject, nextProject, navigate]
  );

  useKeyPress(['ArrowLeft', 'ArrowRight'], handleArrow, !!project);

  if (!project) {
    return (
      <main className="detail">
        <div className="detail__not-found">
          <h1 className="detail__title">404 — CARTRIDGE NOT FOUND</h1>
          <p className="detail__error-text">▸ This cartridge isn't in the inventory.</p>
          <button
            type="button"
            className="detail__btn detail__btn--primary"
            onClick={() => navigate('/projects')}
          >
            ▸ BACK TO PROJECTS
          </button>
        </div>
      </main>
    )
  };

  const color = project.color;

  return (
    <main className="detail">
      <header className="detail__header">
        <button
          type="button"
          className="detail__back"
          onClick={() => navigate('/projects')}
        >
          ◂ PROJECTS / DETAIL
        </button>
        <span className="detail__file-no">
          FILE {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </header>

      <div className='detail__layout'>
        <aside className='detail__sidebar'>
          <CartridgeDisplay project={project} />

          <div className={`detail__stats detail__stats--${color}`}>
            <h2 className={`detail__stats-label detail__stats-label--${color}`}>STATS</h2>
            <StatRow label="LVL" value={String(project.level).padStart(2, '0')} color={color} />
            <StatRow label="START" value={project.start} color={color} />
            {project.end && <StatRow label="END" value={project.end} color={color} />}
            {project.party && <StatRow label="PARTY" value={String(project.party).padStart(2, '0')} color={color} />}
            <StatRow label="STATUS" value={project.status} highlight={project.status === 'IN PROGRESS'} color={color} />
          </div>
        </aside>

        <section className='detail__main'>
          <h1 className={`detail__title detail__title--${color}`}>
            {project.title}
          </h1>
          <p className={`detail__subtitle detail__subtitle--${color}`}>
            ▸ {project.subtitle}
          </p>
          <div className={`detail__description detail__description--${color}`}>
            {Array.isArray(project.description)
              ? project.description.map((para, i) => <p key={i}>{para}</p>)
              : <p>{project.description}</p>}
          </div>
          {project.techStack?.length > 0 && (
            <section className='detail__section'>
              <h2 className={`detail__section-label detail__section-label--${color}`}>
                ▸ TECH STACK
              </h2>
              <div className="detail__tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className={`detail__tech-tag detail__tech-tag--${color}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className="detail__actions">
            {project.links?.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className={`detail__btn detail__btn--primary detail__btn--${color}`}
              >
                ▸ VIEW FIGMA
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`detail__btn detail__btn--outline detail__btn--${color}`}
              >
                ▸ GITHUB
              </a>
            )}
            {project.links?.writeup && (
              <a
                href={project.links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className={`detail__btn detail__btn--outline detail__btn--${color}`}
              >
                ▸ READ MORE
              </a>
            )}
          </div>
        </section>
      </div >

      {project.screenshots?.length > 0 && (
        <ScreenshotGallery screenshots={project.screenshots} color={color} />
      )}

      <footer className="detail__footer">
        <button
          type="button"
          className="detail__nav-arrow"
          onClick={() => navigate(`/projects/${prevProject.id}`)}
        >
          ◂ PREV ({prevProject.title})
        </button>
        <span className="detail__location">
          LOCATION: PROJECTS / {project.title}
        </span>
        <button
          type="button"
          className="detail__nav-arrow"
          onClick={() => navigate(`/projects/${nextProject.id}`)}
        >
          ({nextProject.title}) NEXT ▸
        </button>
      </footer>

    </main >
  )
}