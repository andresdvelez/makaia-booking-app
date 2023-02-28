import React, { useContext, useEffect, useState } from "react";
import { ContainerSC, InputBodySC, InputSC, LabelSC } from "./style";
import DropdownPassengers from "../../DropdownPassengers/DropdownPassengers";

// Icons
import { IoIosArrowDown } from "react-icons/io";
import { showContext } from "../../Banner/Banner";

function PassengersInput() {
  const { showPassengers, setShowPassengers, setPassengersData } =
    useContext(showContext);
  const [inputValue, setInputValue] = useState({
    adults: 0,
    children: 0,
    newBorn: 0,
  });
  const { adults, children, newBorn } = inputValue;

  const [totalPassengers, setTotalPassengers] = useState(0);

  const iconStyle = { fontSize: "22px" };

  const handleClick = () => {
    setShowPassengers(!showPassengers);
  };

  useEffect(() => {
    setTotalPassengers(adults + children + newBorn);
    setPassengersData(inputValue);
  }, [adults, children, newBorn]);

  return (
    <ContainerSC>
      <InputBodySC onClick={handleClick}>
        <LabelSC>Pasajeros</LabelSC>
        <InputSC type="button">{totalPassengers}</InputSC>
      </InputBodySC>
      {showPassengers && <DropdownPassengers setInputValue={setInputValue} />}
      <IoIosArrowDown style={iconStyle} />
    </ContainerSC>
  );
}

export default PassengersInput;
