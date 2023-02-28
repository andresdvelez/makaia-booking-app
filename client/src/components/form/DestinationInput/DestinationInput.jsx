import React, { useContext, useEffect, useState } from "react";
import { showContext } from "../../Banner/Banner";
import DestinationDropdown from "../../DestinationDropdown/DestinationDropdown";
import { InputSC } from "../CountryInput/style";
import { ContainerSC, LabelSC } from "./style";

function DestinationInput() {
  const { showArriveCountry, setShowArriveCountry } = useContext(showContext);
  const [inputValue, setInputValue] = useState("A dónde viajas?");

  const handleShow = () => {
    setShowArriveCountry(true);
  };

  return (
    <ContainerSC>
      <InputSC readOnly value={inputValue} onClick={handleShow} />
      {showArriveCountry && <DestinationDropdown setInputValue={setInputValue} />}
      <LabelSC>Seleccione un destino</LabelSC>
    </ContainerSC>
  );
}

export default DestinationInput;
