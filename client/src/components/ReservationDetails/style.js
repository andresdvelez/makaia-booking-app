import { NavLink } from "react-router-dom";
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

export const RedirectionBtnSC = styled(NavLink)`
  background-color: #fff;
  border: 1px solid #9d2479;
  border-radius: 20px;
  color: #9d2479;
  padding: 0.8em;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    background-color: #9d2479;
    color: #fff;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
