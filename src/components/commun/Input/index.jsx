import React from "react";
import { Container } from "./default";

export default ({ showForm }) => {
  return (
    <Container>
      <div className="container__item">
        <form className={showForm ? "form active" : "form"}>
          <input
            type="email"
            className="form__field"
            placeholder="Your E-Mail Address"
          />
          <button
            type="button"
            className={showForm ? "btn uppercase active" : "btn uppercase"}
          >
            Search
          </button>
        </form>
      </div>
    </Container>
  );
};
