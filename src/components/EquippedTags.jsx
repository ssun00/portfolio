export default function EquippedTags({ items }) {
  return (
    <div className="equipped">
      {items.map((item) => (
        <span key={item} className="equipped__tag">
          {item}
        </span>
      ))}
    </div>
  );
}