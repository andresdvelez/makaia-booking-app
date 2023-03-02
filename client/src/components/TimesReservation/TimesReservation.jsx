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
} from "./style";

// Icons
import { useContext, useEffect } from "react";
import { monthNames } from "../../constants";
import { flightBookingContext } from "../../Screens/Flights/Flights";
import { luggageOptions } from "./luggageData";
import { AuthContext } from "../../context/authContext";

function TimesReservation() {
  const {
    formData,
    luggage,
    setLuggage,
    flightsData,
    luggageType,
    setLuggageType,
    setIsShow,
    dataIdChild,
    setDataIdChild,
    loading,
  } = useContext(flightBookingContext);

  useEffect(() => {
    flightsData.length && setLuggage(flightsData[0]?.price);
  }, [flightsData, setLuggage]);

  const handleSelection = (e) => {
    if (e.target.id === "pack") {
      setLuggageType(e.target.dataset["type"]);
      setIsShow(true);
      setDataIdChild([
        ...dataIdChild,
        { id: e.target.getAttribute("data-id") },
      ]);
    }
  };

  return (
    <MainContainerSC>
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
          <SubtitleSC>Seleccion de horarios y equipajes</SubtitleSC>
          <FlightsContainerSC onClick={handleSelection}>
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
                    <FightRightSC data-id={flight?._id}>
                      {luggageOptions.map((pack) => (
                        <LuggageSC
                          key={pack.id}
                          data-id={flight?._id}
                          id="pack"
                          className={
                            luggage === luggageType ? "selectedSuit" : ""
                          }
                          data-type={pack.type}
                        >
                          {pack.icon}
                          <TextSC>{pack.text}</TextSC>
                          <PriceSC>${pack.price} USD</PriceSC>
                        </LuggageSC>
                      ))}
                    </FightRightSC>
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
            <FlightsContainerSC onClick={handleSelection}>
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
                  <FightRightSC data-id={flight?._id}>
                    {luggageOptions.map((pack) => (
                      <LuggageSC
                        key={pack.id}
                        data-id={flight?._id}
                        id="pack"
                        className={
                          luggage === luggageType ? "selectedSuit" : ""
                        }
                        data-type={pack.type}
                      >
                        {pack.icon}
                        <TextSC>{pack.text}</TextSC>
                        <PriceSC>${pack.price} USD</PriceSC>
                      </LuggageSC>
                    ))}
                  </FightRightSC>
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
