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
