import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { SubtitleSC } from "../../Sections/ServicesSection/style";
import {
  BodySC,
  ContainerSC,
  HeaderSC,
  NameSC,
  OptionSC,
} from "../DestinationDropdown/style";
import {} from "./style";

function CountryDropdown({ setIsOpen, setInputValue }) {
  const [countries, setCountries] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/flights"
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
        <SubtitleSC>Desde dónde viajas?</SubtitleSC>
      </HeaderSC>
      <BodySC>
        {!loading &&
          countries.map((country) => (
            <OptionSC
              onClick={() => handleClick(country?.departureCity)}
              type="button"
              key={country._id}
            >
              <NameSC>{country?.departureCity}</NameSC>
            </OptionSC>
          ))}
      </BodySC>
    </ContainerSC>
  );
}

export default CountryDropdown;
