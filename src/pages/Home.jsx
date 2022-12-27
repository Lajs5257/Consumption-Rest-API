import Header from "../components/Header";
import Tabla from "../components/Table";
import Search from "../components/Search";
import "../styles/Home.css";

function Carousel() {
  return (
    <React.Fragment>      
      <div className='vid'>
        <video loop autoPlay muted>
          <source src="./RC-banner3-3.mp4" type="video/mp4" />
          </video>
        </div>
    </React.Fragment>
  );
}

//ReactDOM.render(<Carousel/>, document.getElementById('videoApp'));

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="divider"></div>
      <Carousel/>
      <h1>
        Pagina de <span>tracking</span>
      </h1>
      <p>Bienvenido a Recurso confiable</p>
      <p>Con esta página podras ver el estado de tus envios</p>
      <Search />
      <Tabla />
      
    </div>
  );
};

export default Home;
