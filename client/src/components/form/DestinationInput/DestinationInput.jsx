import React, { useEffect, useState } from "react";
import DestinationDropdown from "../../DestinationDropdown/DestinationDropdown";
import { InputSC } from "../CountryInput/style";
import { ContainerSC, LabelSC } from "./style";

function DestinationInput() {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState("A dónde viajas?");

  const handleShow = () => {
    setIsShow(true);
  };

  return (
    <ContainerSC>
      <InputSC readOnly value={inputValue} onClick={handleShow} />
      {isShow && (
        <DestinationDropdown
          setIsOpen={setIsShow}
          setInputValue={setInputValue}
        />
      )}
      <LabelSC>Seleccione un destino</LabelSC>
    </ContainerSC>
  );
}

export default DestinationInput;
