import { RARITIES } from "../data/Designs";

function DetailRow({ label, value }) {
  return (
    <div className="design-detail__stat-row">
      <span className="design-detail__stat-label">{label}</span>
      <span className="design-detail__stat-value">{value}</span>
    </div>
  );
}

function PlaceholderPreview() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 10 10" shapeRendering="crispEdges">
      <rect x="2" y="2" width="6" height="6" fill="none" stroke="#FF6BAE" strokeWidth="0.5" />
      <rect x="4" y="4" width="2" height="2" fill="#FF2E88" />
    </svg>
  );
}

export default function DesignDetail({ design, onInspect }) {
  if (!design) {
    return (
      <div className="design-detail design-detail--empty">
        <p className="design-detail__hint">
          ▸ Select a slot<br />
          to inspect an item
        </p>
      </div>
    );
  }

  const rarity = RARITIES[design.rarity];

  return (
    <div className="design-detail" style={{ '--rarity-color': rarity.color }}>
      <div className="design-detail__preview">
        {design.thumbnail ? (
          <img src={design.thumbnail} alt={design.title} />
        ) : (
          <PlaceholderPreview color={rarity.color} />
        )}
      </div>

      <h2 className="design-detail__title">{design.title}</h2>
      <p className="design-detail__rarity">
        ▸ <span style={{ color: rarity.color }}>{rarity.label}</span> / {design.category.toUpperCase()}
      </p>

      <p className="design-detail__description">{design.description}</p>

      <div className="design-detail__stats">
        <DetailRow label="TOOL" value={design.tool} />
        <DetailRow label="YEAR" value={design.year} />
      </div>

      <div className="design-detail__actions">
        <button
          type="button"
          className="design-detail__btn design-detail__btn--primary"
          onClick={onInspect}
        >
          ▸ INSPECT
        </button>
        {design.downloadUrl && (
          <a
            href={design.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="design-detail__btn design-detail__btn--outline"
          >
            ▸ DOWNLOAD
          </a>
        )}
      </div>
    </div>
  );
}