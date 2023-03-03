import styled from "styled-components";

export const LoginSC = styled.section`
  background-image: url(https://images.pexels.com/photos/12954087/pexels-photo-12954087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  object-fit: cover;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const LInputSC = styled.input`
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem;
`;
export const LButtonSC = styled.button`
  background-color: #9d2479;
  border-radius: 16px;
  color: #f2f2f2;
  cursor: pointer;
  padding: 1rem;
  z-index: 99;
`;
