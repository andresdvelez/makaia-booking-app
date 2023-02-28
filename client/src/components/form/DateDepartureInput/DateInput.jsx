import React, { useContext, useState } from "react";
import {
  ContainerSC,
  InputBodySC,
  LabelSC,
  InputSC,
  DateWrapperSC,
  HeaderSC,
  ContainerDateSC,
  CloseBtnSC,
  FooterSC,
  FooterLeftSC,
  TextSC,
  FooterBtnSC,
} from "./style";

// Icons
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "../../../utils/DatePicker/DatePicker";
import { GrClose } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";
import { showContext } from "../../Banner/Banner";

function DateInput({
  label,
  setArriveValue,
  setDepartureValue,
  oneway,
  value,
}) {
  const { showDepartureDate, setShowDepartureDate } = useContext(showContext);

  const iconStyle = { color: "#060606", fontSize: "26px" };

  const handleClick = () => {
    setShowDepartureDate(!showDepartureDate);
  };

  return (
    <ContainerSC>
      <AiOutlineCalendar style={iconStyle} />
      <InputBodySC>
        <LabelSC>{label}</LabelSC>
        <InputSC
          onClick={handleClick}
          readOnly
          value={value}
          placeholder="dd/mm/yyyy"
        />
        {showDepartureDate && (
          <ContainerDateSC>
            <HeaderSC>
              Selecciona tus fechas
              <CloseBtnSC type="button" onClick={handleClick}>
                <GrClose />
              </CloseBtnSC>
            </HeaderSC>
            <DateWrapperSC>
              <DatePicker
                setArriveValue={setArriveValue}
                setDepartureValue={setDepartureValue}
                oneway={oneway}
                title={"Fecha de salida"}
              />
            </DateWrapperSC>
            <FooterSC>
              <FooterLeftSC>
                <FcMoneyTransfer />
                <TextSC>Precios más bajos</TextSC>
              </FooterLeftSC>
              <FooterBtnSC>Hecho</FooterBtnSC>
            </FooterSC>
          </ContainerDateSC>
        )}
      </InputBodySC>
    </ContainerSC>
  );
}

export default DateInput;
