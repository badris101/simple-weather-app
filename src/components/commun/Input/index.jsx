import React from "react";
import { Container } from "./default";

export default ({ showForm, term, setTerm }) => {
  const handleSubmit = e => {
    e.persist();
    e.preventDefault();

    const search_term = e.target.search_term.value;
    console.log(search_term);
    setTerm("");
  };

  return (
    <Container showForm={showForm}>
      <div className="container__item">
        <form
          onSubmit={handleSubmit}
          className={showForm ? "form active" : "form"}
        >
          <input
            name="search_term"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="form__field"
            placeholder="Name of the City"
          />
          <button
            type="submit"
            className={showForm ? "btn uppercase active" : "btn uppercase"}
          >
            Search
          </button>
        </form>
      </div>
    </Container>
  );
};
