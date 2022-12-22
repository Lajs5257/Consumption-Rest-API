import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            class="icon icon-tabler icon-tabler-menu-2"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ff6900"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="justify-content-end"
          variant="dark"
          id="responsive-navbar-nav"
        >
          <Nav className="items">
            <Nav.Link className="activo" href="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#003eaa"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>{" "}
                RC Control
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#003eaa"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                RC Control Track
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#003eaa"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                RC BPO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#003eaa"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                RC Shield
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#003eaa"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
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
            <NavDropdown  id="collasible-nav-dropdown" title="Nosotros">
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
