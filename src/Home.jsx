import Sort from "./Sort";
import Display from "./Display";


function Home({allCountry, setDisplayCountries, displayCountries, setCountry, country}){

    return(

        <div className="w-full flex items-center justify-start flex-col gap-5 md:gap-6 lg:gap-10">
        <Sort  
          allCountry={allCountry}
              setDisplayCountries={setDisplayCountries}
                displayCountries={displayCountries}
              />
        <Display 
          displayCountries={displayCountries}
            allCountry={allCountry}
                setCountry={setCountry}
                    mainCountry={country}
            />
        </div>
    )
}

export default Home;