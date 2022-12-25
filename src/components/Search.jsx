import "../styles/Search.css";
const Search = () => {
  return (
    <form className="search">
      <h3 className="title">Consultar historial de rastreo</h3>

      <div className="form-group">
        <label>Token</label>
        <input type="text" className="form-control" placeholder="Token" />
      </div>

      <div className="form-group">
        <label>Shipment</label>
        <input type="text" className="form-control" placeholder="Shipment" />
      </div>

      <div className="form-group">
        <label>Fecha Inicial</label>
        <input
          type="datetime-local"
          className="form-control"
          placeholder="Dia/Mes/Año"
          defaultValue="2022-12-05T00:00"
        />
      </div>

      <div className="form-group">
        <label>Fecha Final</label>
        <input
          type="datetime-local"
          className="form-control"
          placeholder="Dia/Mes/Año"
          defaultValue="2022-12-09T00:10"
        />
      </div>

      <button type="submit" className="btn btn-lg btn-block submit">
        Realizar consulta
      </button>
    </form>
  );
};

export default Search;
