import styled from "styled-components";

export const GridSC = styled.div`
  display: flex;
  gap: 44px;
`;

export const CardSC = styled.div`
  background: rgba(255, 255, 255, 0.63);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.17);
  padding-inline: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 270px;
  width: 100%;
`;

export const IconWrapperSC = styled.i`
  background-color: #a12785;
  border-radius: 50%;
  color: #f2f2f2;
  font-size: 1.8rem;
  margin-bottom: 21px;
  padding: 21px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubtitleSC = styled.h3`
  color: #080808;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TextSC = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  text-align: center;
`;
