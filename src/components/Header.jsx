import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SvgIcon from "./SvgIcon";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container className="header">
        <Navbar.Brand className="" href="#home">
          <img
            className="imgLogo"
            src="../../public/RC_logo_web.png"
            alt="recurso_confiable"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ff6900"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="justify-content-end"
          variant="white"
          id="responsive-navbar-nav"
        >
          <Nav className="items">
            <Nav.Link className="activo" href="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <SvgIcon />
                RC Control
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <SvgIcon />
                RC Control Track
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <SvgIcon />
                RC BPO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <SvgIcon />
                RC Shield
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <SvgIcon />
                RC Al Volante
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Países" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Centro America
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Colombia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Estados Unidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mexico</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="collasible-nav-dropdown" title="Nosotros">
              <NavDropdown.Item href="#action/3.1">
                Vacantes de empleo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
