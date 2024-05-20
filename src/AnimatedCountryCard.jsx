import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function AnimatedCountryCard({ id, country, allCountry, setCountry, mainCountry }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0 });
    }
  }, [controls, inView]);

  const handleClick = () => {
    const selectedCountry = allCountry.find((item) => item.name === country.name);
    if (selectedCountry) {
      setCountry([selectedCountry]);
      navigate(`/country/${id}`);
    }
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      className="max-w-[280px] overflow-hidden rounded-lg bg-light-element dark:bg-dark-element pb-5 shadow-xl cursor-pointer"
      initial={{ scale: 0 }}
      animate={controls}
      whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <img className="w-full h-[180px] object-cover object-center" src={country.flags.svg} alt={`${country.name} flag`} />
      <div className="p-5">
        <h1 className="text-[20px] font-bold mb-2">{country.name}</h1>
        <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </motion.div>
  );
}

export default AnimatedCountryCard;
