import { useState } from "react";
import axios from "axios";
import Alerta from "./Alerta";
import clienteAxios from "../config/clienteAxios";
import useData from "../hooks/useData";
import "../styles/Search.css";

const Search = () => {
  const [alerta, setAlerta] = useState({});

  const { setData } = useData();
  // Default values
  const [token, setToken] = useState(import.meta.env.VITE_TOKEN);
  const [shipment, setShipment] = useState(import.meta.env.VITE_SHIPMENT);
  const [fechaInicial, setFechaInicial] = useState(import.meta.env.VITE_FH_START);
  const [fechaFinal, setFechaFinal] = useState(import.meta.env.VITE_FH_END);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([token, shipment, fechaInicial, fechaFinal].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const options = {
        method: "POST",
        body:
          '{"token":"' +
          token +
          '","fh_start":"' +
          fechaInicial +
          '","fh_end":"' +
          fechaFinal +
          '","shipment":"' +
          shipment +
          '"}',
      };

      const data = await fetch(
        import.meta.env.VITE_BACKEND_URL +
          "/jsonapi/get_tracking_info_rest_service_std_test",
        options
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(error);
          setAlerta({
            msg: error.response.data,
            error: true,
          });
        });
      if (data != {}) {
        setAlerta({});
        const datos = JSON.stringify(data);
        console.log("guardando data en localstorage");
        localStorage.setItem("data", datos);
        setData(data);
      }
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error,
        error: true,
      });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <form onSubmit={handleSubmit}>
        {msg && <Alerta alerta={alerta} />}

        <div className="search">
          <h3 className="title">Consultar historial de rastreo</h3>
          <div className="form-group">
            <label>Token</label>
            <input
              type="text"
              className="form-control"
              placeholder="Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Shipment</label>
            <input
              type="text"
              className="form-control"
              placeholder="Shipment"
              value={shipment}
              onChange={(e) => setShipment(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fecha Inicial</label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Dia/Mes/Año"
              value={fechaInicial}
              onChange={(e) => setFechaInicial(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fecha Final</label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Dia/Mes/Año"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-lg btn-block submit">
            Realizar consulta
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
