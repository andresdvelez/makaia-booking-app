import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BodyHeaderSC,
  ButtonSC,
  DateSC,
  HeaderSC,
  LocationsSC,
  SubtitleSC,
  TitleSC,
} from "../../components/TimesReservation/style";
import { monthNames } from "../../constants";
import { flightBookingContext } from "../Flights/Flights";
import {
  CapitalLetterSC,
  BodySC,
  HeadRowSC,
  TextSC,
  ContainerSC,
  GridSC,
  SeatSC,
} from "./style";

function SeatScreen() {
  const { flightsData, formData } = useContext(flightBookingContext);

  const seatRef = useRef(null);

  const [flight, setFlight] = useState({});

  const capitalLetters = ["A", "B", "C", "D", "E", "F"];

  const params = useParams();

  useEffect(() => {
    const flightData = flightsData?.filter(
      (flight) => flight?._id === params.id
    );
    flightData.length && console.log(flightData);
    setFlight(flightData);
  }, [flightsData, params.id]);

  return (
    <ContainerSC>
      <HeaderSC>
        <TitleSC>Vuelo de salida</TitleSC>
        <ButtonSC>Cambiar vuelo</ButtonSC>
      </HeaderSC>
      <BodySC>
        <BodyHeaderSC>
          <DateSC>
            Martes {formData?.departureDate.day}{" "}
            {monthNames[formData?.departureDate.month - 1]}{" "}
            {formData?.departureDate.year}
          </DateSC>
          <LocationsSC>
            {formData?.departureCity} a {formData?.destinationCity}
          </LocationsSC>
        </BodyHeaderSC>
        <SubtitleSC>Selecciona tus asientos</SubtitleSC>
        <HeadRowSC>
          {capitalLetters.map((letter) => (
            <CapitalLetterSC>{letter}</CapitalLetterSC>
          ))}
        </HeadRowSC>
        <TextSC>Salida rápida</TextSC>
        <GridSC>
          {flight[0]?.seats?.map((seat, i) => (
            <SeatSC
              disabled={seat.unavailableSeats}
              ref={seatRef}
              className={`seat ${seat.isHall ? "pathway" : ""} ${
                seat.unavailableSeats && "unavailable"
              }`}
            >
              {seat.number}
            </SeatSC>
          ))}
        </GridSC>
      </BodySC>
    </ContainerSC>
  );
}

export default SeatScreen;
