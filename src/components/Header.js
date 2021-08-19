import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
// import Avatar from '@material-ui/core/Avatar';
import Logout from './Logout';
// import Reviews from './pages/Reviews';
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUsers,faPen,faUserCircle,faMapSigns } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <section className="navbar-home">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><img className="logo" alt="..." src={logo} /></Navbar.Brand>
            <Navbar.Collapse className="me-auto justify-content-end text01">
              
              <Nav.Link href="/" ><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /> HOME</Link></Nav.Link>
              <Nav.Link href="/discover" ><Link to="/discover"><FontAwesomeIcon icon={faMapSigns} fixedWidth/> DISCOVER</Link></Nav.Link>
              <Nav.Link href="/reviews" ><Link to="/reviews"><FontAwesomeIcon icon={faPen} fixedWidth />REVIEWS</Link></Nav.Link>
              <Nav.Link href="/about-us" ><Link to="/about-us"><FontAwesomeIcon icon={faUsers} fixedWidth /> ABOUT US</Link></Nav.Link>
             <NavDropdown title="PROFILE" id="nav-dropdown">
                <NavDropdown.Item  href="/profile"><FontAwesomeIcon icon={faUserCircle} fixedWidth /> Profile</NavDropdown.Item>
                {/* <NavDropdown.Item href="/">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link><Logout /></Link></NavDropdown.Item>
              </NavDropdown>

            </Navbar.Collapse >
            {/* <Link><Logout/></Link> */}
          </Container>
        </Navbar>
      </section>
    );
  }
}

export default Header;