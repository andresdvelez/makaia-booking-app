import React from "react";
import { FormBodySC } from "../../MainForm/style";
import CodeInput from "../CodeInput/CodeInput";
import CountryInput from "../CountryInput/CountryInput";
import DateInput from "../DateInput/DateInput";
import PassengersInput from "../PassengersInput/PassengersInput";

function OneWayMenu() {
  return (
    <FormBodySC>
      <CountryInput label="Origen" />
      <CountryInput label="Seleccione un destino" />
      <DateInput label="Salida" />
      <PassengersInput />
      <CodeInput />
    </FormBodySC>
  );
}

export default OneWayMenu;
