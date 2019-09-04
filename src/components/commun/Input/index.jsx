import React from "react";
import { Container } from "./default";

export default ({ showForm, term, setTerm }) => {
  const handleSubmit = e => {
    e.persist();
    e.preventDefault();

    const email = e.target.email.value;
    console.log(email);
  };

  return (
    <Container>
      <div className="container__item">
        <form
          onSubmit={handleSubmit}
          className={showForm ? "form active" : "form"}
        >
          <input
            name="email"
            type="email"
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="form__field"
            placeholder="Your E-Mail Address"
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
