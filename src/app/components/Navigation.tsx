'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Navbar expand="lg" id="navbar" className="bg-body-tertiary border-bottom border-top border-black border-4">
            <Container>
                <div className="brand-text">
                    <Navbar.Brand id={"lunchtime"} href="#home">Lunchbreak</Navbar.Brand>
                    <Navbar.Text className={"t"}>Are you hungry yet?</Navbar.Text>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#restaurants">Restaurants</Nav.Link>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">How does it work?</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                About Lunchbreak
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">
                                Feedback
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href={""}>|</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;