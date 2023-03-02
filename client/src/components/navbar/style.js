import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerSC = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const ButtonSC = styled(NavLink)`
  border: 2px solid #9d2479;
  border-radius: 20px;
  color: #9d2479;
  cursor: pointer;
  padding: 0.7rem 1.3rem;
  text-decoration: none;

  transition: 150ms ease;

  &:hover {
    background-color: #9d2479;
    color: #fff;
  }
`;
