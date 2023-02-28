import React, { useEffect, useState } from "react";
import {
  ButtonSC,
  ContainerSC,
  CountSC,
  GroupSC,
  InfoSC,
  InputWrapperSC,
  SubtitleSC,
  TextSC,
} from "./style";

function DropdownPassengers({ setInputValue }) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [newBorn, setNewBorn] = useState(0);

  const handleAdd = (field, setField) => {
    setField(field + 1);
  };

  const handleMinus = (field, setField) => {
    if (field > 0) setField(field - 1);
  };

  useEffect(() => {
    setInputValue({
      adults,
      children,
      newBorn,
    });
  }, [adults, children, newBorn]);

  return (
    <ContainerSC>
      <GroupSC>
        <InfoSC>
          <SubtitleSC>Adultos</SubtitleSC>
          <TextSC>(13+ años)</TextSC>
        </InfoSC>
        <InputWrapperSC>
          <ButtonSC
            onClick={() => handleMinus(adults, setAdults)}
            type="button"
            menus
          >
            -
          </ButtonSC>
          <CountSC readOnly value={adults} />
          <ButtonSC onClick={() => handleAdd(adults, setAdults)} type="button">
            +
          </ButtonSC>
        </InputWrapperSC>
      </GroupSC>
      <GroupSC>
        <InfoSC>
          <SubtitleSC>Niños</SubtitleSC>
          <TextSC>(2 - 12 años)</TextSC>
        </InfoSC>
        <InputWrapperSC>
          <ButtonSC
            onClick={() => handleMinus(children, setChildren)}
            type="button"
            menus
          >
            -
          </ButtonSC>
          <CountSC readOnly value={children} />
          <ButtonSC
            onClick={() => handleAdd(children, setChildren)}
            type="button"
          >
            +
          </ButtonSC>
        </InputWrapperSC>
      </GroupSC>
      <GroupSC>
        <InfoSC>
          <SubtitleSC>Bebés</SubtitleSC>
          <TextSC>(0 - 23 meses)</TextSC>
        </InfoSC>
        <InputWrapperSC>
          <ButtonSC
            onClick={() => handleMinus(newBorn, setNewBorn)}
            type="button"
            menus
          >
            -
          </ButtonSC>
          <CountSC readOnly value={newBorn} />
          <ButtonSC
            onClick={() => handleAdd(newBorn, setNewBorn)}
            type="button"
          >
            +
          </ButtonSC>
        </InputWrapperSC>
      </GroupSC>
    </ContainerSC>
  );
}

export default DropdownPassengers;
