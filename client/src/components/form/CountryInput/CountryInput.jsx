import React from "react";
import { ContainerSC, InputSC, LabelSC } from "./style";

function CountryInput({ label }) {
  return (
    <ContainerSC>
      <InputSC placeholder="---" />
      <LabelSC>{label}</LabelSC>
    </ContainerSC>
  );
}

export default CountryInput;
