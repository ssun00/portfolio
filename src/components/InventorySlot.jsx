import { RARITIES } from "../data/Designs";

export function EmptySlot() {
  return <div className="slot slot--empty" aria-hidden="true" />;
}

function PlaceholderSprite({ color }) {
  return (
    <svg width="65%" height="65%" viewBox="0 0 10 10" shapeRendering="crispEdges">
      <rect x="2" y="2" width="6" height="6" fill="none" stroke={color} strokeWidth="0.5" opacity="0.65" />
      <rect x="4" y="4" width="2" height="2" fill={color} />
    </svg>
  );
}

export default function InventorySlot({ design, isSelected, onClick }) {
    const rarity = RARITIES[design.rarity];

    return (
        <button
            type="button"
            className={`slot ${isSelected ? 'slot--selected' : ''}`}
            onClick={onClick}
            style={{ '--rarity-color': rarity.color }}
            aria-label={`Inspect ${design.title}`}
            aria-pressed={isSelected}
        >
            <div className="slot__inner">
                {design.thumbnail ? (
                    <img src={design.thumbnail} alt="" className="slot__img" />
                ) : (
                    <PlaceholderSprite color={rarity.color} />
                )}
            </div>
            <span className="slot__count" aria-hidden="true">x1</span>
        </button>
    )
}