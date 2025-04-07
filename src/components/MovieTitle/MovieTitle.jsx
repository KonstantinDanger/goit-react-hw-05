export default function MovieTitle({ className, title, date }) {
  const year = date.split("-")[0];
  const releaseYear = year ? `(${year})` : "";

  return (
    <div className={className}>
      {title} {releaseYear}
    </div>
  );
}
