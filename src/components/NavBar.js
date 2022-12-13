import "../styles/NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar expand={"md"} className="mb-3 header_navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <StorefrontIcon className="store_icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            {/* for toggler close */}
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/shoppingBag">
                  <ShoppingCartIcon className="nav_icon" />
                  <label className="d-md-none">&nbsp;Cart</label>
                </Nav.Link>
              </Nav>
              {/* for future search */}
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search_input"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <SearchIcon />
                </Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
