export default function ProjectFilters({ categories, activeCategory, onChange }) {
    return (
        <div className="filters" role="tablist" aria-label="Project categories">
            {categories.map(({ id, label }) => {
                const isActive = id === activeCategory;
                return (
                    <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`filters__tab ${isActive ? 'filters__tab--active' : ''}`}
                        onClick={() => onChange(id)}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}