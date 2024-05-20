import { useEffect, useState } from "react";
import { uuidv7 } from "uuidv7";
import AnimatedCountryCard from "./AnimatedCountryCard"

function Display({ displayCountries, allCountry, setCountry, mainCountry }) {
  const [defaultDisplay, setDefaultDisplay] = useState([]);

  useEffect(() => {
    const defaultCountries = { name: 'Germany, United States of America, Brazil, Iceland, Afghanistan, Åland Islands, Albania, Algeria' };

    // Split the string into an array of country names
    const defaultCountryNames = defaultCountries.name.split(',').map(name => name.trim());

    // Filter and map the countries in allCountry that match the default country names, preserving the order
    const landPageCountries = defaultCountryNames
      .map(countryName => allCountry.find(country => country.name === countryName))
      .filter(Boolean); // Remove any undefined entries if a country name wasn't found

    setDefaultDisplay(landPageCountries);
  }, [allCountry]);

  return (
    <div className="text-light dark:text-dark bg-light dark:bg-dark w-full px-5 lg:px-10 mt-5 flex items-start justify-center">
      <div className="max-w-container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-row gap-8 lg:gap-16">
        {displayCountries.length === 0 ? (
          defaultDisplay.map((country, _) => (
            <AnimatedCountryCard key={uuidv7()} id={uuidv7()} country={country} allCountry={allCountry} setCountry={setCountry} mainCountry={mainCountry}/>
          ))
        ) : (
          displayCountries.map((country, _) => (
            <AnimatedCountryCard key={uuidv7()} id={uuidv7()}  country={country} allCountry={allCountry} setCountry={setCountry} mainCountry={mainCountry}/>
          ))
        )}
      </div>
    </div>
  );
}



export default Display;
