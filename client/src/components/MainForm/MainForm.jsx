import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.js";
import {
  MainFormSC,
  BtnWrapperSC,
  ButtonSC,
  FormBodySC,
  BtnFormSC,
  BtnLabelSC,
  OverlaySC,
} from "./style.js";

// Icons
import { IoAirplaneOutline } from "react-icons/io5";

// Component
import OneWayMenu from "../form/OneWayMenu/OneWayMenu";
import CountryInput from "../form/CountryInput/CountryInput.jsx";
import DateInput from "../form/DateDepartureInput/DateInput.jsx";
import PassengersInput from "../form/PassengersInput/PassengersInput.jsx";
import CodeInput from "../form/CodeInput/CodeInput.jsx";
import DestinationInput from "../form/DestinationInput/DestinationInput.jsx";
import DateArriveInput from "../form/DateArriveInput/DateArriveInput.jsx";
import { showContext } from "../Banner/Banner.jsx";
import { useNavigate } from "react-router-dom";

// Logic
// import { handleAddClass } from "./script.js";

function MainForm() {
  const [isActive, setIsActive] = useState(false);
  const [departureValue, setDepartureValue] = useState({
    year: "YYYY",
    month: "MM",
    day: "DD",
  });
  const [arriveValue, setArriveValue] = useState({
    yearArrive: "YYYY",
    monthArrive: "MM",
    dayArrive: "DD",
  });

  const { year, month, day } = departureValue;
  const { yearArrive, monthArrive, dayArrive } = arriveValue;

  const iconStyle = { fontSize: "19px", transform: "rotate(-30deg)" };

  const { handleSubmit, reset, passengersData } = useContext(showContext);

  const navigate = useNavigate();

  const handleAddClass = () => {
    setIsActive(true);
  };

  const handleRemoveClass = () => {
    setIsActive(false);
  };

  const onSubmit = (data) => {
    localStorage.setItem(
      "flight-details",
      JSON.stringify({
        ...data,
        oneway: isActive,
        departureDate: departureValue,
        combackDate: arriveValue,
        passengers: passengersData,
      })
    );
    navigate("/vuelos");
  };

  return (
    <MainFormSC onSubmit={handleSubmit(onSubmit)}>
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
          <DateInput
            value={`${year}/${month}/${day}`}
            label="Salida"
            oneway={!isActive}
            setArriveValue={setArriveValue}
            setDepartureValue={setDepartureValue}
          />
          <DateArriveInput
            value={`${yearArrive}/${monthArrive}/${dayArrive}`}
            label="Regreso"
            setDepartureValue={setDepartureValue}
            oneway={!isActive}
            setArriveValue={setArriveValue}
          />
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
