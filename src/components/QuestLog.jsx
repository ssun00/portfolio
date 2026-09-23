import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/Projects';

const VISIBLE_COUNT = 3;

export default function QuestLog() {
  const navigate = useNavigate();

  const recent = useMemo(() => {
    const sorted = [...PROJECTS].sort((a, b) => {
      const aInProgress = a.status === 'IN PROGRESS' ? 1 : 0;
      const bInProgress = b.status === 'IN PROGRESS' ? 1 : 0;
      if (aInProgress !== bInProgress) return bInProgress - aInProgress;
      return b.year - a.year;
    });
    return sorted.slice(0, VISIBLE_COUNT);
  }, []);

  return (
    <div className="quest-log">
      <ul className="quest-log__list">
        {recent.map((project, i) => (
          <QuestEntry
            key={project.id}
            project={project}
            isCurrent={i === 0}
            onClick={() => navigate(`/projects/${project.id}`)}
          />
        ))}
      </ul>

      <button
        type="button"
        className="quest-log__view-all"
        onClick={() => navigate('/projects')}
      >
        ▸ VIEW FULL QUEST LOG ({PROJECTS.length} ENTRIES)
      </button>
    </div>
  );
}

function QuestEntry({ project, isCurrent, onClick }) {
  return (
    <li className="quest-log__entry">
      <button
        type="button"
        className={`quest-log__button ${isCurrent ? 'quest-log__button--current' : ''}`}
        onClick={onClick}
      >
        <span
          className={`quest-log__dot ${isCurrent ? 'quest-log__dot--current' : ''}`}
          aria-hidden="true"
        />
        <span className="quest-log__content">
          <span className="quest-log__title-row">
            <span className="quest-log__title">{project.title}</span>
            <span className="quest-log__year">▸ {project.year}</span>
          </span>
          <span className="quest-log__subtitle">{project.subtitle}</span>
        </span>
      </button>
    </li>
  );
}