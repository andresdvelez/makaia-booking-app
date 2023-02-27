import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import CountryDropdown from "../../CountryDropdown/CountryDropdown";
import { ContainerSC, InputSC, LabelSC, OptionSC } from "./style";

function CountryInput({ label }) {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState("Desde dónde viajas?");

  const handleShow = () => {
    setIsShow(true);
  };

  return (
    <ContainerSC>
      <InputSC readOnly value={inputValue} onClick={handleShow} />
      {isShow && (
        <CountryDropdown setIsOpen={setIsShow} setInputValue={setInputValue} />
      )}
      <LabelSC>{label}</LabelSC>
    </ContainerSC>
  );
}

export default CountryInput;
