import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Pages.css'

function Pages() {
  return (
    <Navbar expand="lg" className='pages'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Your</Nav.Link>
            <Nav.Link href="#action2">All</Nav.Link>
            <Nav.Link href="#">
              Blocked
            </Nav.Link>
          </Nav>
          <NavDropdown title="Filter" id="navbarScrollingDropdown" className='px-3'>
              <NavDropdown.Item href="#action4">
                Type
              </NavDropdown.Item>
              <NavDropdown.Item>
                
              </NavDropdown.Item>

              <NavDropdown.Divider />
               

              <NavDropdown.Item href="#action5">
                Cardholder 
              </NavDropdown.Item>
              <div className='btn-div'>
              <Button className='bg-danger btn-danger buttonOne'>Apply</Button>
              <Button className='bg-white text-dark btn-dark'>Cancel</Button>
              </div>
            </NavDropdown>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Pages;