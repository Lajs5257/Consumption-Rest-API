import '../styles/Search.css'
const Search = () => {
  return (
    <form className="search">
      <h3 className='title'>Consultar historial de rastreo</h3>

      <div className="form-group">
        <label>Token</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label></label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-lg btn-block submit">
        Realizar consulta
      </button>
    </form>
  );
};

export default Search;
