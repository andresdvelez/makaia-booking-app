import styled from "styled-components";

export const MainContainerSC = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ContainerSC = styled.div`
  margin-right: 2rem;
  width: 60vw;
`;

export const HeaderSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom 2rem;
`;
export const TitleSC = styled.h2`
  font-size: 1.8rem;
`;
export const ButtonSC = styled.button`
  border: 2px solid #9d2479;
  border-radius: 20px;
  color: #9d2479;
  cursor: pointer;
  padding: 0.7rem 1.3rem;

  transition: 150ms ease;

  &:hover {
    background-color: #9d2479;
    color: #fff;
  }
`;
export const BodySC = styled.div``;
export const BodyHeaderSC = styled.div`
  margin-bottom: 1rem;
`;
export const DateSC = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
`;
export const LocationsSC = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
`;
export const SubtitleSC = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;
export const FlightsContainerSC = styled.div`
  padding-inline: 0.5rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const FlightSC = styled.div`
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 150ms ease-in;

  &:hover {
    box-shadow: 0 8px 32px 0 rgba(11, 18, 105, 0.17);
  }

  .flightActive {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
`;
export const FlightLeftSC = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
export const TimeSC = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
`;
export const StopsContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .line {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    height: 2px;
    width: 100%;
  }
`;
export const TextSC = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.7rem;
  text-align: center;
`;
export const FightRightSC = styled.div`
  display: flex;
  gap: 1rem;
`;
export const LuggageSC = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 0.4rem 1rem;
  z-index: 999;

  transition: 100ms ease;

  &.selectedSuit {
    color: #fff;
    background-color: #9d2479;
    pointer-events: none;
  }

  :is(.selectedSuit) p {
    color: #fff;
  }

  &:hover {
    color: #fff;
    background-color: #9d2479;
  }

  &:hover > p {
    color: #fff;
  }

  & > p {
    pointer-events: none;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
`;
export const PriceSC = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  pointer-events: none;
`;
