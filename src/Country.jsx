import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Country({ country }) {
  const { id } = useParams(); // Get the id from the route parameters
  const navigate = useNavigate();
  // console.log(country);

  function goBack(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='w-full max-w-container px-5 lg:px-10 flex flex-col items-start justify-start gap-10 text-light dark:text-dark'>
      <motion.button
        className="bg-light-element dark:bg-dark-element py-2 px-5 shadow-lg flex items-center justify-start gap-3"
        onClick={(e) => goBack(e)}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </motion.button>
      {country.map(item => (
        <div className='w-full flex items-center sm:items-start justify-start lg:items-center lg:justify-start flex-col lg:flex-row gap-5 lg:gap-[100px]' key={id}>
         {console.log(item.name)}
          <img className='md:h-[300px] w-full lg:max-w-[600px] lg:h-auto lg:max-h-[350px] object-cover object-center' src={item?.flags?.svg} alt="" />

          <div className='w-full lg:w-auto flex flex-col items-start justify-start gap-5'>
            <h1 className='font-extrabold text-[25px] sm:text-[32px] md:text-[50px] lg:text-[25px]'>{item?.name}</h1>
            <div className='flex flex-col sm:flex-row w-full items-start lg:items-center justify-start gap-5 md:gap-12'>
              <div className='flex flex-col items-start justify-start gap-1 md:text-[18px] lg:text-[12px]'>
                <p>Native Name: {item?.nativeName}</p>
                <p>Population: {item?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p>Region: {item?.region}</p>
                <p>Sub Region: {item?.subregion}</p>
                <p>Capital: {item?.capital}</p>
                {/* <p>Time Zone: {item.timezones}</p> */}
                <p>Area: {item?.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}KM</p>
              </div>
              <div className='flex flex-col items-start justify-start gap-1 md:text-[18px] lg:text-[12px]'>
                <p>Top Level Domains: {item?.topLevelDomain}</p>

                {item?.currencies.map(currency => (<p key={currency?.code}>Currencies: {currency?.name}</p>))}

                {item?.languages.map(lang => (<p key={lang?.name}>Languages: {lang?.nativeName}, {lang?.name}</p>))}

              </div>
            </div>
            <div>
              <h2 className='text-[18px] font-bold sm:text-[25px] lg:text-[16px]'>Border Countries:</h2>
              <div className='flex flex-wrap gap-2'>
                {item?.borders?.map(borderCountry => (
                  <span key={borderCountry} className="bg-light-element dark:bg-dark-element px-3 py-1 shadow-md">{borderCountry}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Country;