import Header from "../components/Header";
import Tabla from "../components/Table";
import Search from "../components/Search";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="divider"></div>
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
