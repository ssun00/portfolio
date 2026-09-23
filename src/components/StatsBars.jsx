const TOTAL_SEGMENTS = 10;

export default function StatBars({ stats }) {
  return (
    <div className="stat-bars">
      {stats.map(({ label, value }) => (
        <StatBar key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function StatBar({ label, value }) {
  const filled = Math.max(0, Math.min(TOTAL_SEGMENTS, value));

  return (
    <div className="stat-bars__row">
      <span className="stat-bars__label">{label}</span>
      <div
        className="stat-bars__track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={filled}
        aria-valuemin={0}
        aria-valuemax={TOTAL_SEGMENTS}
      >
        {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={`stat-bars__segment ${i < filled ? 'stat-bars__segment--filled' : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}