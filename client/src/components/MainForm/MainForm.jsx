import React, { useEffect, useState } from "react";
import "./style.js";
import {
  MainFormSC,
  BtnWrapperSC,
  ButtonSC,
  FormBodySC,
  BtnFormSC,
  BtnLabelSC,
} from "./style.js";

// Icons
import { IoAirplaneOutline } from "react-icons/io5";

// Component
import OneWayMenu from "../form/OneWayMenu/OneWayMenu";
import CountryInput from "../form/CountryInput/CountryInput.jsx";
import DateInput from "../form/DateInput/DateInput.jsx";
import PassengersInput from "../form/PassengersInput/PassengersInput.jsx";
import CodeInput from "../form/CodeInput/CodeInput.jsx";
import useFetch from "../../hooks/useFetch.js";
import DestinationInput from "../form/DestinationInput/DestinationInput.jsx";

// Logic
// import { handleAddClass } from "./script.js";

function MainForm() {
  const [isActive, setIsActive] = useState(false);

  const handleAddClass = () => {
    setIsActive(true);
  };

  const handleRemoveClass = () => {
    setIsActive(false);
  };

  const iconStyle = { fontSize: "19px", transform: "rotate(-30deg)" };

  return (
    <MainFormSC>
      <BtnWrapperSC>
        <ButtonSC
          type="button"
          className={!isActive ? "active" : ""}
          onClick={handleRemoveClass}
        >
          Viaje redondo
        </ButtonSC>
        <ButtonSC
          type="button"
          className={isActive ? "active" : ""}
          onClick={handleAddClass}
        >
          Viaje sencillo
        </ButtonSC>
      </BtnWrapperSC>
      {isActive ? (
        <OneWayMenu />
      ) : (
        <FormBodySC>
          <CountryInput label="Origen" />
          <DestinationInput />
          <DateInput label="Salida" />
          <DateInput label="Regreso" />
          <PassengersInput />
          <CodeInput />
        </FormBodySC>
      )}
      <BtnFormSC>
        <IoAirplaneOutline style={iconStyle} />
        <BtnLabelSC>Buscar vuelos</BtnLabelSC>
      </BtnFormSC>
    </MainFormSC>
  );
}

export default MainForm;