import React, { useContext, useEffect, useState } from "react";
import { showContext } from "../../Banner/Banner";
import DestinationDropdown from "../../DestinationDropdown/DestinationDropdown";
import { InputSC } from "../CountryInput/style";
import { ContainerSC, LabelSC } from "./style";

function DestinationInput() {
  const { showArriveCountry, setShowArriveCountry, register } =
    useContext(showContext);
  const [inputValue, setInputValue] = useState();

  const handleShow = () => {
    setShowArriveCountry(true);
  };

  return (
    <ContainerSC>
      <InputSC
        {...(inputValue && { ...register("destinationCity") })}
        readOnly
        placeholder="A dónde viajas?"
        value={inputValue}
        onClick={handleShow}
      />
      {showArriveCountry && (
        <DestinationDropdown setInputValue={setInputValue} />
      )}
      <LabelSC>Seleccione un destino</LabelSC>
    </ContainerSC>
  );
}

export default DestinationInput;
