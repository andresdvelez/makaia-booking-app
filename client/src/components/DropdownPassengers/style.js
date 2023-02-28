import styled from "styled-components";

export const ContainerSC = styled.div`
  background-color: #f6f6f6;
  border-radius: 0 0 25px 25px;
  padding: 15px;
  position: absolute;
  bottom: -3.5rem;
  right: 1rem;
  width: 17rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GroupSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoSC = styled.div``;
export const SubtitleSC = styled.h3`
  font-size: 15px;
`;
export const TextSC = styled.p`
  font-size: 12px;
`;
export const InputWrapperSC = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
export const ButtonSC = styled.button`
  cursor: pointer;
  padding: 8px;
  padding-inline: 0.9rem;

  

  font-size: 1.5rem;

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.3);

    &:hover {
        background-color #9d2479;
        border-radius: 7px 0 0 7px;
        color: #f2f2f2;
    }
  }

  &:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    
    &:hover {
        background-color #9d2479;
        border-radius: 0 7px 7px 0;
        color: #f2f2f2;
    }
  }
`;
export const CountSC = styled.input`
  padding-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
