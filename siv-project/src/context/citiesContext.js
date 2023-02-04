import { createContext, useState } from "react";
import { citiesData } from "../lib/citiesData";

export const CitiesContext = createContext();

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState(citiesData);

  const filterCities = (country) => {
    if (!country) {
      return cities;
    } else
      return cities.filter(
        (city) => city.country.toLowerCase() === country.toLowerCase()
      );
  };

  return (
    <CitiesContext.Provider value={{ filterCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
