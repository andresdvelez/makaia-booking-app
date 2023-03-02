import React, { useState } from "react";
import { FormBodySC } from "../../MainForm/style";
import CodeInput from "../CodeInput/CodeInput";
import CountryInput from "../CountryInput/CountryInput";
import DateInput from "../DateDepartureInput/DateInput";
import DestinationInput from "../DestinationInput/DestinationInput";
import PassengersInput from "../PassengersInput/PassengersInput";

function OneWayMenu() {
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

  return (
    <FormBodySC>
      <CountryInput label="Origen" />
      <DestinationInput />
      <DateInput
        value={`${year}/${month}/${day}`}
        label="Salida"
        setArriveValue={setArriveValue}
        setDepartureValue={setDepartureValue}
      />
      <PassengersInput />
      <CodeInput />
    </FormBodySC>
  );
}

export default OneWayMenu;
