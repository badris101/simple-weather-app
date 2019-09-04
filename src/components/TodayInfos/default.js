import styled from "styled-components";

export const TodayInfo = styled.div`
  padding: 15px;
  margin: 0 25px 25px 25px;
  border-radius: 10px;

  & > div:not(:last-child) {
    margin: 0 0 10px 0;
  }

  & > div .title {
    float: left;
    font-weight: 700;
  }

  & > div .value {
    float: right;
  }
`;
