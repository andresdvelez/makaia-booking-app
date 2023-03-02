import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { SubtitleSC } from "../../Sections/ServicesSection/style";
import { showContext } from "../Banner/Banner";
import {
  BodySC,
  ContainerSC,
  HeaderSC,
  NameSC,
  OptionSC,
} from "../DestinationDropdown/style";
import {} from "./style";

function CountryDropdown({ setInputValue }) {
  const [countries, setCountries] = useState([]);
  const { setShowDepartureCountry } = useContext(showContext);

  const { data, loading } = useFetch("http://localhost:8800/api/flights");

  useEffect(() => {
    !loading && setCountries(data);
  }, [data, loading]);

  const handleClick = (inputValue) => {
    setShowDepartureCountry(false);

    setInputValue(inputValue);
  };

  return (
    <ContainerSC>
      <HeaderSC>
        <SubtitleSC>Desde dónde viajas?</SubtitleSC>
      </HeaderSC>
      <BodySC>
        {loading
          ? "Loading..."
          : countries.map((country) => (
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
