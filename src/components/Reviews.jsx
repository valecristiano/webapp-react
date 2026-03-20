export default function Reviews({ movie }) {
  return (
    <>
      <h3 className="p-2">User reviews:</h3>
      <div className="card w-100 bg-secondary-subtle border border-warning-subtle">
        <ul className="list-group list-group-flush ">
          {movie.reviews.map((review) => (
            <li key={review.id} className="list-group-item list-group-item-secondary text-white">
              <strong>{review.name}</strong> - {review.vote}/5
              <p className="mb-0 text-muted">{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
