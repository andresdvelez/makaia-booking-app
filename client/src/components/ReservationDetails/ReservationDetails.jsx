import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { monthNames } from "../../constants";
import { flightBookingContext } from "../../Screens/Flights/Flights";
import { TimeSC } from "../TimesReservation/style";
import {
  BodySC,
  ContainerSC,
  FullTimeSC,
  GroupSC,
  HeaderSC,
  LocationsSC,
  RedirectionBtnSC,
  RowSC,
  TextSC,
  TopSC,
} from "./style";

function ReservationDetails() {
  const { formData, luggage, flightsData, isShow, luggageType, dataIdChild } =
    useContext(flightBookingContext);

  const location = useLocation();

  return (
    <ContainerSC>
      <GroupSC>
        <HeaderSC>Tu reservación</HeaderSC>
        <BodySC>
          <TopSC>
            <p>Pasajeros</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {formData?.passengers.adults > 0 && (
                <p>{formData?.passengers.adults} Adulto(s)</p>
              )}
              {formData?.passengers.children > 0 && (
                <p>{formData?.passengers.children} niños</p>
              )}
              {formData?.passengers.newBorn > 0 && (
                <p>{formData?.passengers.newBorn} bebés</p>
              )}
            </div>
          </TopSC>
          <>
            <TextSC>Vuelo de salida</TextSC>
            <LocationsSC>
              <div>
                <TimeSC>{formData?.departureCity}</TimeSC>
                <TextSC>05:45 PM</TextSC>
              </div>
              <div className="line"></div>
              <div>
                <TimeSC>{formData?.destinationCity}</TimeSC>
                <TextSC>06:47 PM</TextSC>
              </div>
            </LocationsSC>
            <FullTimeSC>
              Martes, {formData?.departureDate.day}{" "}
              {monthNames[formData?.departureDate.month - 1]},{" "}
              {formData?.departureDate.year}
            </FullTimeSC>
          </>
          <>
            {!formData?.oneway && (
              <>
                <TextSC>Vuelo de regreso</TextSC>
                <LocationsSC>
                  <div>
                    <TimeSC>{formData?.destinationCity}</TimeSC>
                    <TextSC>05:45 PM</TextSC>
                  </div>
                  <div className="line"></div>
                  <div>
                    <TimeSC>{formData?.departureCity}</TimeSC>
                    <TextSC>06:47 PM</TextSC>
                  </div>
                </LocationsSC>
                <FullTimeSC>
                  Martes, {formData?.departureDate.day}{" "}
                  {monthNames[formData?.departureDate.month - 1]},{" "}
                  {formData?.departureDate.year}
                </FullTimeSC>
              </>
            )}
          </>
        </BodySC>
      </GroupSC>
      <GroupSC>
        <HeaderSC>Costo de vuelo</HeaderSC>
        <RowSC>
          <p>Tarifa base</p>
          <p>${flightsData[0]?.price} USD</p>
        </RowSC>
        {isShow && (
          <RowSC>
            <p>Tarifa equipaje</p>
            <p>
              $
              {luggageType === "sm"
                ? 100
                : luggageType === "md"
                ? 200
                : luggageType === "lg"
                ? 300
                : ""}{" "}
              USD
            </p>
          </RowSC>
        )}
        <RowSC bold>
          <p>Total</p>
          <p>${luggage} USD</p>
        </RowSC>
      </GroupSC>
      {dataIdChild.length === 2 &&
        location.pathname !== `/vuelos/${dataIdChild[0]?.id}` && (
          <RedirectionBtnSC to={`/vuelos/${dataIdChild[0].id}`}>
            Seleccionar asientos
          </RedirectionBtnSC>
        )}
    </ContainerSC>
  );
}

export default ReservationDetails;
