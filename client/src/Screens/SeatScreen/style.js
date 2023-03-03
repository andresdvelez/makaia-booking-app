import styled from "styled-components";

export const ContainerSC = styled.section`
  margin-right: 2rem;
  width: 60vw;
`;

export const BodySC = styled.div`
  width: 28rem;
`;

export const HeadRowSC = styled.div`
  margin-top: 1rem;
  height: 3rem;
  width: 105%;

  display: flex;
  gap: 1em;
`;
export const CapitalLetterSC = styled.p`
  background-color: #fff;
  border-radius: 8px;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(3n) {
    margin-right: 3rem;
  }
`;

export const TextSC = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  margin-right: 2.5rem;
`;

export const GridSC = styled.div`
  margin-top: 0.5rem;
  margin-right: 2.5rem;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;

  & > .pathway {
    background-color: #fff;
    border: none;
    color: rgba(0, 0, 0, 1);
  }

  & > .unavailable {
    background-color: #fff;
    border: none;
  }
`;
export const SeatSC = styled.button`
  background-color: #bfbdbf;
  border: 1px solid #9d2479;
  border-radius: 8px;
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  &:hover {
    color: #fff;
    background-color: #9d2479;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
