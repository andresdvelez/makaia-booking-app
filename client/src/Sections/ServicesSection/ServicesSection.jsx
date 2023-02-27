import React from "react";
import { MainContainerSC } from "../PaySection/style";
import { GridSC, CardSC, IconWrapperSC, SubtitleSC, TextSC } from "./style";
import { Cards } from "./Data";
import { TitleSC } from "../../components/Banner/style";

function ServicesSection() {
  return (
    <MainContainerSC>
      <TitleSC>Servicios disponibles</TitleSC>
      <GridSC>
        {Cards.map((card) => (
          <CardSC key={card.id}>
            <IconWrapperSC>{card.icon}</IconWrapperSC>
            <SubtitleSC normal>{card.title}</SubtitleSC>
            <TextSC alpha>{card.text}</TextSC>
          </CardSC>
        ))}
      </GridSC>
    </MainContainerSC>
  );
}

export default ServicesSection;
