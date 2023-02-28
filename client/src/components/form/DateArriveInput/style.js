import styled from "styled-components";

export const ContainerSC = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 6px;

  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const InputBodySC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

export const LabelSC = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.7em;
`;

export const InputSC = styled.input`
  color: rgba(0, 0, 0, 0.9);
  font-size: 1em;

  &::placeholder {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const ContainerDateSC = styled.div`
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 20px;
  position: absolute;
  top: -1rem;
  left: 4rem;

  z-index: 99;
`;

export const DateWrapperSC = styled.div`
  display: flex;
`;

export const HeaderSC = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  font-size: 21px;
  font-weight: bold;
  height: 100%;
  width: 100%;

  svg {
  }
`;

export const CloseBtnSC = styled.button`
  cursor: pointer;
  font-size: 20px;
`;

export const FooterSC = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export const FooterLeftSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TextSC = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

export const FooterBtnSC = styled.button`
  background-color: #9d2479;
  border-radius: 30px;
  color: #f2f2f2;
  cursor: pointer;
  padding: 15px 25px;
`;
