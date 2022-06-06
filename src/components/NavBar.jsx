import logo from "../levvel-logo.svg";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from "reactstrap";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Levvel Logo" height={45} />
          </NavbarBrand>

          <Nav navbar>
            <Row>
              <NavItem>
                <NavLink href="/blogs">All Posts</NavLink>
              </NavItem>
            </Row>
          </Nav>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;
