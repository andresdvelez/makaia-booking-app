import React, { useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { showContext } from "../../Banner/Banner";
import CountryDropdown from "../../CountryDropdown/CountryDropdown";
import { ContainerSC, InputSC, LabelSC, OptionSC } from "./style";

function CountryInput({ label }) {
  const { showDepartureCountry, setShowDepartureCountry, register } =
    useContext(showContext);
  const [inputValue, setInputValue] = useState();

  const handleShow = () => {
    setShowDepartureCountry(true);
  };

  return (
    <ContainerSC>
      <InputSC
        {...(inputValue && { ...register("departureCity") })}
        readOnly
        placeholder="Desde dónde viajas?"
        value={inputValue}
        onClick={handleShow}
      />
      {showDepartureCountry && (
        <CountryDropdown setInputValue={setInputValue} />
      )}
      <LabelSC>{label}</LabelSC>
    </ContainerSC>
  );
}

export default CountryInput;
