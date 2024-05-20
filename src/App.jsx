import Header from "./Header";
import Home from "./Home";
import Country from "./Country";
import { useState, useEffect } from "react";
import api from "../api/data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Dark theme
  const [theme, setTheme] = useState(null);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Fetching data from the API
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    const retrieveDatas = async () => {
      try {
        const response = await api.get('');
        return response.data;
      } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
      }
    };

    const getAllDatas = async () => {
      const allDatas = await retrieveDatas();
      if (allDatas) {
        setAllCountry(allDatas);
        console.log(allCountry);
      }
    };

    getAllDatas();
  }, []);

  return (
    <div className="dark:bg-dark bg-light min-h-screen h-auto flex items-center justify-start flex-col gap-5 md:gap-6 lg:gap-10 pb-5">
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home 
              allCountry={allCountry} 
                setDisplayCountries={setDisplayCountries}
                 displayCountries={displayCountries}
                  setCountry={setCountry}
                    country={country}
                    />}
          />
          <Route 
            path="/country/:id" 
              element={<Country 
                country={country}
                  allCountry={allCountry}
                  setCountry={setCountry}
                  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
