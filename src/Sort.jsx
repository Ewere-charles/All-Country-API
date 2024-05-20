import React, { useState, useEffect } from 'react';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimate, stagger, motion } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

function Sort({ allCountry, displayCountries, setDisplayCountries }) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const [searchWord, setSearchWord] = useState('');
  const [filter, setFilter] = useState('');
  const [suggestedCountries, setSuggestedCountries] = useState([]);


  useEffect(()=> {

    const searchFound = allCountry.some((item) => item.name === searchWord);
    if(searchFound){

    const countryFound = allCountry.filter((item) => item.name === searchWord)
        setDisplayCountries(countryFound);
    }else{
        console.error('not Found');
        setDisplayCountries([]);
        searchWord === ''? setDisplayCountries([]) : '';
    }

    if (searchWord.trim() !== '') {
        const suggested = allCountry.filter((country) =>
          country.name.toLowerCase().startsWith(searchWord.toLowerCase())
        );
        setSuggestedCountries(suggested);
      } else {
        setSuggestedCountries([]);
      }
      

  }, [searchWord]);

  function handleFilter(region){
    setFilter(region);
  }

  useEffect(()=> {
    const filterCountry = allCountry.filter((item) => item.region === filter);
    setDisplayCountries(filterCountry);

}, [filter]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    const words = query.split(' ');
  
    const capitalizedWords = words.map((word, index) => {
      // List of words to exclude from capitalization
      const excludedWords = ['of', 'and', 'the'];
  
      // Capitalize all words except for excluded words
      if (!excludedWords.includes(word) || index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
  
    setSearchWord(capitalizedWords.join(' '));
  }
  


  return (
    <div className='w-full px-5 lg:px-10 flex items-start justify-center'>
    <div className="max-w-container w-full text-light dark:text-dark flex flex-col md:flex-row items-start lg:items-center justify-start gap-10 md:justify-between">
        
        {/* Search section */}
      <div className=" relative bg-light-element dark:bg-dark-element px-4 rounded-[5px] flex items-center justify-start gap-4 w-full md:w-auto lg:w-auto shadow-md">
        <div className="py-3">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="search"
          value={searchWord}
          className="bg-transparent outline-none w-full h-full md:w-[350px] b-light"
          placeholder="Search for country"
          onChange={(e)=> handleChange(e)}
        />


        { displayCountries.length === 0 ? (
        suggestedCountries.length !== 0 ? (<ul 
            className=' absolute top-[100%] left-0 w-full max-h-[500px] h-auto overflow-auto rounded-sm shadow-sm mt-1 bg-light-element dark:bg-dark-element px-4 py-2 z-50'>
            {
                suggestedCountries.map((item, i) => ( <li
                key={item.name}
                className='cursor-pointer p-2 text-[14px] hover:bg-light dark:hover:bg-dark rounded-[5px]'
                onClick={()=> setSearchWord(item.name)}
                >{item.name}</li>))
            }
        </ul>): (''))
           :
            null
        }
      </div>



        {/* filter button */}
      <nav className="w-[200px] h-auto relative z-40" ref={scope}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full py-3 px-4 bg-light-element dark:bg-dark-element text-[14px]  rounded-[5px] flex items-center justify-between shadow-md"
        >
          Filter by region
          <div className="arrow ml-2" style={{ transformOrigin: '50% 55%' }}>
          <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </motion.button>
        <ul
          className="absolute w-full mt-1 bg-light-element dark:bg-dark-element rounded-sm p-2 left-0 shadow-md"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
        >
            {
                ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map((region, index) => (
                    <li 
                    className="py-1 px-2 text-[14px] hover:bg-light dark:hover:bg-dark rounded-[5px]"
                      onClick={() =>handleFilter(region)}
                        key={index}>{region}</li>
                ))
            }
        </ul>
      </nav>

    </div>
    </div>
  );
}

export default Sort;
