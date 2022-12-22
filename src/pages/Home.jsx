import Header from "../components/Header";
import Tabla from "../components/Table";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <h1>
        Pagina de <span>tracking</span>
      </h1>
      <Tabla />
    </>
  );
};

export default Home;
