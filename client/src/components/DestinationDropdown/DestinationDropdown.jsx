import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { SubtitleSC } from "../../Sections/ServicesSection/style.js";
import { BodySC, ContainerSC, HeaderSC, NameSC, OptionSC } from "./style.js";

function DestinationDropdown({ setIsOpen, setInputValue }) {
  const [countries, setCountries] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/destinations"
  );

  useEffect(() => {
    !loading && setCountries(data);
  }, [data]);

  const handleClick = (inputValue) => {
    setIsOpen(false);

    setInputValue(inputValue);
  };

  return (
    <ContainerSC>
      <HeaderSC>
        <SubtitleSC>A dónde viajas?</SubtitleSC>
      </HeaderSC>
      <BodySC>
        {!loading &&
          countries.map((country) => (
            <OptionSC
              onClick={() => handleClick(country?.name)}
              type="button"
              key={country._id}
            >
              <NameSC>{country.name}</NameSC>
            </OptionSC>
          ))}
      </BodySC>
    </ContainerSC>
  );
}

export default DestinationDropdown;
