import styled from "styled-components";

export const ContainerSC = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  height: 90px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
  flex-direction: column;
`;

export const InputSC = styled.input`
  border: none;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  height: 20px;
  width: 80%;

  display: flex;
  justify-content: center;
`;

export const LabelSC = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
`;

export const OptionSC = styled.option``;
