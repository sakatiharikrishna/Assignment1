import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaArrowCircleLeft } from "react-icons/fa";

function Header() {
    return (
        <>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Incidents</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <span style={{ left: "10px", bottom: "10px", color: "skyblue", padding: "4px 15px" }}><FaArrowCircleLeft /></span>
                        <h3 style={{ color: "black", right: "50px", bottom: "50px" }}>Incidents.</h3>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;