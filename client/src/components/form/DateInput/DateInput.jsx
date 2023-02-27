import React from "react";
import { ContainerSC, InputBodySC, LabelSC, InputSC } from "./style";

// Icons
import { AiOutlineCalendar } from "react-icons/ai";

function DateInput({ label }) {
  const iconStyle = { color: "#060606", fontSize: "26px" };

  return (
    <ContainerSC>
      <AiOutlineCalendar style={iconStyle} />
      <InputBodySC>
        <LabelSC>{label}</LabelSC>
        <InputSC placeholder="dd/mm/yyyy" />
      </InputBodySC>
    </ContainerSC>
  );
}

export default DateInput;
