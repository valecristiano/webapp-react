import axios from "axios";
import { useState } from "react";

const formStart = {
  name: "",
  vote: "",
  text: "",
};

export default function ReviewForm({ movieId, getMovie }) {
  const addReviewUrl = `http://localhost:3000/movies/${movieId}/review`;

  const [formState, setFormState] = useState(formStart);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(addReviewUrl, formState).then((res) => {
      console.log(res.data);
    });

    console.log(formState);
    setFormState(formStart);
    getMovie();
  };

  return (
    <div className="container">
      <div className="card w-100 bg-secondary-subtle border border-warning-subtle">
        <div className="card-header">
          <h2>Add a review</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="form-label p-2">
            Name
          </label>
          <input className="form-control" type="text" id="name" name="name" value={formState.name} onChange={handleFormChange} required />
          <label htmlFor="vote" className="form-label p-2">
            Vote
          </label>
          <input className="form-control" type="number" min="1" max="5" id="vote" name="vote" value={formState.vote} onChange={handleFormChange} required />
          <label htmlFor="text" className="form-label p-2">
            Text
          </label>
          <input className="form-control" type="text-area" id="text" name="text" value={formState.text} onChange={handleFormChange} required />
          <button className="btn btn-outline-warning m-2">Publish</button>
        </form>
      </div>
    </div>
  );
}
