import styled from "styled-components";

export const ContainerSC = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputBodySC = styled.div``;

export const LabelSC = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
`;

export const InputSC = styled.input`
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.9em;

  &::placeholder {
    color: rgba(0, 0, 0, 0.9);
  }
`;
