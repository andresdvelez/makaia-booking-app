import styled from "styled-components";

export const ContainerSC = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const GroupSC = styled.div`
  background-color: #fff;
  width: 140%;
`;
export const HeaderSC = styled.p`
  background-color: rgb(235, 235, 235);
  font-size: 14px;
  font-weight: bold;
  padding: 0.3em;
`;
export const BodySC = styled.div`
  padding: 0.4em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const TopSC = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 500;
`;
export const TextSC = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.3em;
`;
export const LocationsSC = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;

  & .line {
    background-color: rgba(0, 0, 0, 0.5);
    height: 2px;
    width: 15%;
  }
`;
export const FullTimeSC = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const RowSC = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0.5rem;

  ${({ bold }) => (bold ? "font-weight: bold" : "")}
`;