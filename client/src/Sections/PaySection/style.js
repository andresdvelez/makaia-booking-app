import styled from "styled-components";

export const MainContainerSC = styled.section`
  padding-top: 10px;
  padding-left: 3.4rem;
`;

export const ContainerSC = styled.div`
  background: rgba(255, 255, 255, 0.63);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.17);

  padding: 40px;

  display: flex;
  justify-content: space-between;
`;

export const ContentSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0em;
`;

export const IconsSC = styled.div`
  display: flex;
  gap: 1em;
`;
