import styled, { css } from "styled-components";

export const PickerWrapperSC = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  width: 500px;
`;

export const TitleSC = styled.h2`
  font-size: 18px;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const HeaderSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 10px;

  p {
    flex: 1 0 0;
    text-align: center;
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const BodySC = styled.div`
  margin: 5px;
`;

export const SevenColGridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;

  ${({ heading }) =>
    heading &&
    css`
      font-weight: bold;
      margin-bottom: 1rem;
    `}

  p {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
  }
`;
