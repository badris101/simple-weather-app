import styled from "styled-components";

export const BtnContainer = styled.div`
  padding: 25px 35px;

  .location-button {
    outline: none;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    border-radius: 25px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    background-image: var(--gradient);
    color: #ffffff;
    font-weight: 700;
    -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-transition: -webkit-transform 200ms ease;
    transition: -webkit-transform 200ms ease;
    -o-transition: transform 200ms ease;
    transition: transform 200ms ease;
    transition: transform 200ms ease, -webkit-transform 200ms ease;
  }

  .location-button:hover {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;
