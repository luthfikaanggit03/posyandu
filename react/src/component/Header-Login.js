import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <div>
        <br></br>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Container>
          <Navbar.Brand href="/dashboard">
            <img
              alt=""
              src="images/logo.png"
              width="50"
              height="50"
              className="d-inline-bold center"
            />{' '}
            Posyandu Puspita Sari
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features"></Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
                
              </Nav>
              <Nav>
                
                <Nav.Link href="/login">Logout</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
        
      );
}


export default Header;