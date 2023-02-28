import React, { useEffect, useState } from "react";
import { ContainerSC, InputBodySC, InputSC, LabelSC } from "./style";
import DropdownPassengers from "../../DropdownPassengers/DropdownPassengers";

// Icons
import { IoIosArrowDown } from "react-icons/io";

function PassengersInput() {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    adults: 0,
    children: 0,
    newBorn: 0,
  });
  const { adults, children, newBorn } = inputValue;

  const [totalPassengers, setTotalPassengers] = useState(0);

  const iconStyle = { fontSize: "22px" };

  const handleClick = () => {
    setIsShow(true);
  };

  useEffect(() => {
    setTotalPassengers(adults + children + newBorn);
  }, [adults, children, newBorn]);

  return (
    <ContainerSC>
      <InputBodySC onClick={handleClick}>
        <LabelSC>Pasajeros</LabelSC>
        <InputSC type="button">{totalPassengers}</InputSC>
        {isShow && <DropdownPassengers setInputValue={setInputValue} />}
      </InputBodySC>
      <IoIosArrowDown style={iconStyle} />
    </ContainerSC>
  );
}

export default PassengersInput;
