import React from "react";
import {
  BannerSC,
  FormContainerSC,
  TitleSC,
  TextSC,
  BannerImgSC,
} from "./style.js";

// Components
import MainForm from "../MainForm/MainForm";

function Banner() {
  return (
    <BannerSC>
      <FormContainerSC>
        <TitleSC>
          Busca un nuevo destino y <span>comienza la aventura.</span>
        </TitleSC>
        <TextSC alpha>
          Descubre vuelos al mejor precio y perfectos para cualquier viaje.
        </TextSC>
        <MainForm />
      </FormContainerSC>
      <BannerImgSC />
    </BannerSC>
  );
}

export default Banner;
