# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


  const [allCountry, setAllCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

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
      }
    };

    getAllDatas();
  }, []);# All-Country-API
