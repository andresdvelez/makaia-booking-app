import React from "react";
import { ContainerSC, InputBodySC, InputSC, LabelSC } from "./style";

// Icons
import { IoIosArrowDown } from "react-icons/io";

function PassengersInput() {
  const iconStyle = { fontSize: "22px" };

  return (
    <ContainerSC>
      <InputBodySC>
        <LabelSC>Pasajeros</LabelSC>
        <InputSC placeholder="N. pasajeros" />
      </InputBodySC>
      <IoIosArrowDown style={iconStyle} />
    </ContainerSC>
  );
}

export default PassengersInput;
