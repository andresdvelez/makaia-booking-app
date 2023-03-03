import {
  BodyHeaderSC,
  BodySC,
  ButtonSC,
  ContainerSC,
  DateSC,
  FightRightSC,
  FlightLeftSC,
  FlightSC,
  FlightsContainerSC,
  HeaderSC,
  LocationsSC,
  LuggageSC,
  MainContainerSC,
  PriceSC,
  StopsContainerSC,
  SubtitleSC,
  TextSC,
  TimeSC,
  TitleSC,
  LuggagueContainerSC,
} from "./style";

// Icons
import { useContext, useState } from "react";
import { monthNames } from "../../constants";
import { flightBookingContext } from "../../Screens/Flights/Flights";
import { luggageOptions } from "./luggageData";
import { RedirectionBtnSC } from "../ReservationDetails/style";

function TimesReservation() {
  const {
    formData,
    flightsData,
    setDataIdChild,
    loading,
    setLuggageType,
    setIsShow,
    setLuggage,
  } = useContext(flightBookingContext);
  const [luggageDeparture, setLuggageDeparture] = useState(luggageOptions);

  const handleSelectDeparture = (e) => {
    setLuggageDeparture(
      luggageDeparture.map((l) => {
        l.isActive = l?.id === parseInt(e.target?.id);
        return l;
      })
    );
    setDataIdChild(true);
    setIsShow(true);
    setLuggageType(e.target.getAttribute("data-type"));
    setLuggage(
      Number(e.target.getAttribute("data-price")) + flightsData[0]?.price
    );
  };
  return (
    <MainContainerSC>
      <ContainerSC>
        <HeaderSC>
          <TitleSC>Vuelo de salida</TitleSC>
          <RedirectionBtnSC to='/'>Cambiar vuelo</RedirectionBtnSC>
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
          <SubtitleSC>Seleccion de horarios y equipajes</SubtitleSC>
          <LuggagueContainerSC>
            {luggageDeparture.map((pack) => (
              <LuggageSC
                key={pack?.id}
                id={pack?.id}
                onClick={handleSelectDeparture}
                className={pack.isActive && "selectedSuit"}
                data-type={pack.type}
                data-price={pack.price}
              >
                {pack.icon}
                <TextSC>{pack.text}</TextSC>
                <PriceSC>${pack.price} USD</PriceSC>
              </LuggageSC>
            ))}
          </LuggagueContainerSC>
          <FlightsContainerSC>
            {loading
              ? "Loading..."
              : flightsData.map((flight) => (
                  <FlightSC key={flight._id}>
                    <FlightLeftSC>
                      <TimeSC>{flight.departureTime}</TimeSC>
                      <StopsContainerSC>
                        <TextSC>1h 57min</TextSC>
                        <div className="line"></div>
                        <TextSC>Sin escalas</TextSC>
                      </StopsContainerSC>
                      <TimeSC>{flight.landingTime}</TimeSC>
                    </FlightLeftSC>
                  </FlightSC>
                ))}
          </FlightsContainerSC>
        </BodySC>
      </ContainerSC>
      {!formData?.oneway && (
        <ContainerSC>
          <HeaderSC>
            <TitleSC>Vuelo de regreso</TitleSC>
            <ButtonSC>Cambiar vuelo</ButtonSC>
          </HeaderSC>
          <BodySC>
            <BodyHeaderSC>
              <DateSC>
                Martes {formData?.combackDate.dayArrive}{" "}
                {monthNames[formData?.combackDate.monthArrive - 1]}{" "}
                {formData?.combackDate.yearArrive}
              </DateSC>
              <LocationsSC>
                {formData?.destinationCity} a {formData?.departureCity}
              </LocationsSC>
            </BodyHeaderSC>
            <SubtitleSC>Seleccion de horarios y equipajes</SubtitleSC>
            <FlightsContainerSC>
              {flightsData.map((flight) => (
                <FlightSC key={flight._id}>
                  <FlightLeftSC>
                    <TimeSC>{flight.departureTime}</TimeSC>
                    <StopsContainerSC>
                      <TextSC>1h 57min</TextSC>
                      <div className="line"></div>
                      <TextSC>Sin escalas</TextSC>
                    </StopsContainerSC>
                    <TimeSC>{flight.landingTime}</TimeSC>
                  </FlightLeftSC>
                </FlightSC>
              ))}
            </FlightsContainerSC>
          </BodySC>
        </ContainerSC>
      )}
    </MainContainerSC>
  );
}

export default TimesReservation;
