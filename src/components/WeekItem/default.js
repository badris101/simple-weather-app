import styled from "styled-components";

export const Item = styled.li`
  float: left;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 200ms ease;
  -o-transition: 200ms ease;
  transition: 200ms ease;
  border-radius: 10px;
  ${({ active }) => active && "background: #fff"};
  ${({ active }) => active && "color: #222831"};
  ${({ active }) => active && "border-radius: 10px"};

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background: #fff;
    color: #222831;
    -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
  }

  .day-name {
    display: block;
    margin: 10px 0 0 0;
    text-align: center;
  }

  .day-icon {
    display: block;
    height: 30px;
    width: auto;
    margin: 0 auto;
  }

  .day-temp {
    display: block;
    text-align: center;
    margin: 10px 0 0 0;
    font-weight: 700;
  }
`;
