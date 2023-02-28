import React from "react";
import { InputSC, LabelSC } from "../DateDepartureInput/style";
import { ContainerSC } from "./style";

function CodeInput() {
  return (
    <ContainerSC>
      <LabelSC>¿Tienes un código de promoción?</LabelSC>
      <InputSC placeholder="-- -- -- --" />
    </ContainerSC>
  );
}

export default CodeInput;
