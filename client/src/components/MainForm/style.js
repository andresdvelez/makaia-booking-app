import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainFormSC = styled.form``;

export const OverlaySC = styled.div``;

export const BtnWrapperSC = styled.div`
  background-color: #fff;
  border: 1px solid #060606;
  border-radius: 4px;
  margin-bottom: 28px;
  padding: 5px 8px;
  width: max-content;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonSC = styled.button`
  cursor: pointer;
`;

export const FormBodySC = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  height: 15rem;
`;

export const BtnFormSC = styled.button`
  background-color: #9d2479;
  border-radius: 25px;
  color: #f2f2f2;
  cursor: pointer;
  margin-top: 17px;
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: center;
`;

export const BtnLabelSC = styled.span`
  font-size: 16px;
`;

// How to style third-party components

export const StyledLink = styled(NavLink)``;

// How to use props for variants
export const StyledLink2 = styled(NavLink)`
  ${(props) => (props.variant === "bold" ? "font-weight: bold" : "")}
`;
