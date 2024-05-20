import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header({ handleThemeSwitch , theme}) {
    
  return (
    <header className="w-full flex items-center justify-center dark:bg-dark-element bg-light-element py-5 shadow-md ring-offset-2 px-5 lg:px-10 sticky top-0 z-50"> 
      <nav className="max-w-container w-full text-light dark:text-dark flex items-center justify-between">
        <span className="text-[16px] font-semibold md:text-[20px] lg:font-[800]">Where in the world?</span>
        <button onClick={handleThemeSwitch} className="text-[16px] flex items-center justify-start gap-[10px]">
          <FontAwesomeIcon icon={faMoon} />
          {theme === 'dark' ? 'Light' : 'Dark'} theme
        </button>
      </nav>
    </header>
  );
}

export default Header;
