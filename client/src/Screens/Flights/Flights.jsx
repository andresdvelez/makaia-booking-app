import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ReservationDetails from "../../components/ReservationDetails/ReservationDetails";
import useFetch from "../../hooks/useFetch";
import { ContainerSC } from "./style";

export const flightBookingContext = createContext({});

function Flights() {
  const [formData, setFormData] = useState();
  const [isShow, setIsShow] = useState(false);
  const [luggage, setLuggage] = useState(0);
  const [luggageType, setLuggageType] = useState();
  const [flightsData, setFlightsData] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/flights"
  );

  useEffect(() => {
    !loading && setFlightsData(data);
  }, [data]);

  useEffect(() => {
    const getFormData = localStorage.getItem("flight-details");
    getFormData && setFormData(JSON.parse(getFormData));
  }, []);

  return (
    <flightBookingContext.Provider
      value={{
        formData,
        setLuggage,
        luggage,
        flightsData,
        setFlightsData,
        isShow,
        setIsShow,
        luggageType,
        setLuggageType,
      }}
    >
      <ContainerSC>
        <Outlet />
        <ReservationDetails />
      </ContainerSC>
    </flightBookingContext.Provider>
  );
}

export default Flights;
