import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BannerSC,
  FormContainerSC,
  TitleSC,
  TextSC,
  BannerImgSC,
} from "./style.js";

// Components
import MainForm from "../MainForm/MainForm";
import { OverlaySC } from "../MainForm/style.js";

export const showContext = createContext({});

function Banner() {
  const [showDepartureCountry, setShowDepartureCountry] = useState(false);
  const [showArriveCountry, setShowArriveCountry] = useState(false);
  const [showDepartureDate, setShowDepartureDate] = useState(false);
  const [showArriveDate, setShowArriveDate] = useState(false);
  const [showPassengers, setShowPassengers] = useState(false);
  const [passengersData, setPassengersData] = useState({});

  const { register, handleSubmit, reset } = useForm();

  const handleClick = () => {
    setShowDepartureCountry(false);
    setShowArriveCountry(false);
    setShowDepartureDate(false);
    setShowArriveDate(false);
    setShowPassengers(false);
  };

  return (
    <showContext.Provider
      value={{
        showDepartureCountry,
        showArriveCountry,
        showDepartureDate,
        showArriveDate,
        showPassengers,
        setShowDepartureCountry,
        setShowArriveCountry,
        setShowDepartureDate,
        setShowArriveDate,
        setShowPassengers,
        register,
        handleSubmit,
        reset,
        passengersData,
        setPassengersData,
      }}
    >
      <BannerSC>
        <OverlaySC
          onClick={handleClick}
          className={
            showDepartureCountry ||
            showArriveCountry ||
            showDepartureDate ||
            showArriveDate ||
            showPassengers
              ? "shown"
              : "notShown"
          }
        ></OverlaySC>
        <FormContainerSC>
          <TitleSC>
            Busca un nuevo destino y <span>comienza la aventura.</span>
          </TitleSC>
          <TextSC alpha>
            Descubre vuelos al mejor precio y perfectos para cualquier viaje.
          </TextSC>
          <MainForm />
        </FormContainerSC>
        <BannerImgSC />
      </BannerSC>
    </showContext.Provider>
  );
}

export default Banner;
