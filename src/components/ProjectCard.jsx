import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${project.id}`);
    };

    return (
        <button
            type="button"
            className={`cart cart--${project.color}`}
            onClick={handleClick}
            aria-label={`View ${project.title}`}
        >
            <div className="cart__shell">
                <div className="cart__notch" aria-hidden="true" />
                <div className="cart__label">
                    <div className="cart__thumbnail">
                        {project.thumbnail ? (
                            <img src={project.thumbnail} alt="" />
                        ) : (
                            <PlaceholderSprite />
                        )}
                    </div>
                    <div className="cart__title">{project.title}</div>
                    <div className="cart__subtitle">{project.subtitle}</div>
                </div>
            </div>

            <div className="cart__meta">
                LVL {String(project.level).padStart(2, '0')} // {project.year}
            </div>
        </button>
    )
}

function PlaceholderSprite({ color }) {
    const fill = color === 'purple' ? '#C4A7FF' : '#FF6BAE';
    const accent = color === 'purple' ? '#9D5CFF' : '#FF2E88';
    return (
        <svg width="56" height="40" viewBox="0 0 14 10" shapeRendering="crispEdges">
            <rect x="2" y="2" width="3" height="3" fill={fill} />
            <rect x="9" y="2" width="3" height="3" fill={fill} />
            <rect x="2" y="6" width="10" height="2" fill={accent} />
            <rect x="4" y="7" width="2" height="1" fill="#0A0A0F" />
            <rect x="8" y="7" width="2" height="1" fill="#0A0A0F" />
        </svg>
    );
}