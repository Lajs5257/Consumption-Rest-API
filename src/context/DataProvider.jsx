import { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarData = async () => {
      try {
        if (localStorage.getItem("data")) {
          console.log("cargando data de localstorage");
          setData(JSON.parse(localStorage.getItem("data")));
        }
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    cargarData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        cargando,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };

export default DataContext;
