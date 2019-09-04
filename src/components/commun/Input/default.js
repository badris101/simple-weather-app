import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  .uppercase {
    text-transform: uppercase;
  }

  .btn {
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    background: var(--gradient);
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    padding: 12px 36px;
    margin-left: -132px;

    &.active {
      opacity: 1;
      visibility: visible;
      margin-left: -96px;
    }
  }

  .form {
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &__field {
      width: 360px;
      background: #fff;
      color: #a3a3a3;
      font: inherit;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      border: 0;
      outline: 0;
      padding: 22px 18px;
      text-transform: capitalize;
    }
  }
`;
