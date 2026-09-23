export default function CharacterInfo({ character }) {
  return (
    <div className="char-info">
      <h2 className="char-info__label">CHARACTER INFO</h2>
      <CharRow label="CLASS"  value={character.class} />
      <CharRow label="LVL"    value={character.level} />
      <CharRow label="GUILD"  value={character.guild} />
      <CharRow label="STATUS" value={character.status} highlight />
    </div>
  );
}

function CharRow({ label, value, highlight = false }) {
  return (
    <div className="char-info__row">
      <span className="char-info__row-label">{label}</span>
      <span className={`char-info__row-value ${highlight ? 'char-info__row-value--highlight' : ''}`}>
        {highlight && <span className="char-info__dot" aria-hidden="true">●</span>}
        {value}
      </span>
    </div>
  );
}