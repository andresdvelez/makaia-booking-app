import styled from "styled-components";

// Image
import BannerImg from "../../assets/BannerImg2.jpeg";

export const BannerSC = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const FormContainerSC = styled.aside`
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-left: 80px;
  padding: 26px;
  position: absolute;
  left: 50px;
  width: 560px;
  z-index: 10;
`;

export const TitleSC = styled.h2`
  font-size: 28px;
  letter-spacing: 0.7px;
  margin-bottom: 26px;

  display: flex;
  flex-direction: column;
`;

export const TextSC = styled.p`
  ${(props) =>
    (props.alpha && "color: rgb(102, 102, 102)") ||
    (props.normal && "font-weight: bold")};

  font-size: 14px;
  margin-bottom: 26px;
`;

export const BannerImgSC = styled.figure`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  border-radius: 25px;
  margin-left: 17rem;
  object-fit: cover;
  height: 630px;
  width: 1000px;
`;
