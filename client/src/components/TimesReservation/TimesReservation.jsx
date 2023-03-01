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
import { FaSuitcase } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { monthNames } from "../../constants";
import { flightBookingContext } from "../../Screens/Flights/Flights";

function TimesReservation() {
  const {
    formData,
    luggage,
    setLuggage,
    flightsData,
    setLuggageType,
    setIsShow,
  } = useContext(flightBookingContext);

  useEffect(() => {
    flightsData.length && setLuggage(flightsData[0]?.price);
  }, [flightsData]);

  const handleSelect = (e) => {
    setLuggageType(e.target.dataset["type"]);
    setIsShow(true);
    if (e.target.id == 0) {
      setLuggage(flightsData[0]?.price + 100);
      e.target.parentElement.children[0].classList.add("selectedSuit");
      e.target.parentElement.children[1].classList.remove("selectedSuit");
      e.target.parentElement.children[2].classList.remove("selectedSuit");
    } else if (e.target.id == 1) {
      setLuggage(flightsData[0]?.price + 200);
      e.target.parentElement.children[0].classList.remove("selectedSuit");
      e.target.parentElement.children[1].classList.add("selectedSuit");
      e.target.parentElement.children[2].classList.remove("selectedSuit");
    } else if (e.target.id == 2) {
      setLuggage(flightsData[0]?.price + 300);
      e.target.parentElement.children[0].classList.remove("selectedSuit");
      e.target.parentElement.children[1].classList.remove("selectedSuit");
      e.target.parentElement.children[2].classList.add("selectedSuit");
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
          <FlightsContainerSC>
            {flightsData.map((flight) => (
              <FlightSC data-id={flight?._id} key={flight._id}>
                <FlightLeftSC>
                  <TimeSC>{flight.departureTime}</TimeSC>
                  <StopsContainerSC>
                    <TextSC>1h 57min</TextSC>
                    <div className="line"></div>
                    <TextSC>Sin escalas</TextSC>
                  </StopsContainerSC>
                  <TimeSC>{flight.landingTime}</TimeSC>
                </FlightLeftSC>
                <FightRightSC>
                  <LuggageSC id="0" onClick={handleSelect} data-type="sm">
                    <FaSuitcase />
                    <TextSC>1 objeto personal</TextSC>
                    <PriceSC>$100 USD</PriceSC>
                  </LuggageSC>
                  <LuggageSC id="1" onClick={handleSelect} data-type="md">
                    <FaSuitcase />
                    <TextSC>Equipaje de mano</TextSC>
                    <PriceSC>$200 USD</PriceSC>
                  </LuggageSC>
                  <LuggageSC id="2" onClick={handleSelect} data-type="lg">
                    <FaSuitcase />
                    <TextSC>Equipaje 25kg</TextSC>
                    <PriceSC>$300 USD</PriceSC>
                  </LuggageSC>
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
            <FlightsContainerSC>
              <FlightSC>
                <FlightLeftSC>
                  <TimeSC>05:50 PM</TimeSC>
                  <StopsContainerSC>
                    <TextSC>1h 57min</TextSC>
                    <div className="line"></div>
                    <TextSC>Sin escalas</TextSC>
                  </StopsContainerSC>
                  <TimeSC>05:50 PM</TimeSC>
                </FlightLeftSC>
                <FightRightSC>
                  <LuggageSC>
                    <FaSuitcase />
                    <TextSC>1 objeto personal</TextSC>
                    <PriceSC>$100 USD</PriceSC>
                  </LuggageSC>
                  <LuggageSC>
                    <FaSuitcase />
                    <TextSC>Equipaje de mano</TextSC>
                    <PriceSC>$200 USD</PriceSC>
                  </LuggageSC>
                  <LuggageSC>
                    <FaSuitcase />
                    <TextSC>Equipaje 25kg</TextSC>
                    <PriceSC>$300 USD</PriceSC>
                  </LuggageSC>
                </FightRightSC>
              </FlightSC>
            </FlightsContainerSC>
          </BodySC>
        </ContainerSC>
      )}
    </MainContainerSC>
  );
}

export default TimesReservation;
