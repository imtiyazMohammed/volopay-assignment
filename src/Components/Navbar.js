import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import VideocamIcon from '@mui/icons-material/Videocam';

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className="text-bold">Virtual Cards</Navbar.Brand>
        <Navbar.Toggle />
        {/* <Button className="bg-muted btn-light text-primary"> */}
            <span className='span shadow-sm rounded'>
                <VideocamIcon style={{color: "blue"}}></VideocamIcon>
                Learn more
                </span>
             {/* Learn more</Button> */}
        <Navbar.Collapse className="justify-content-end">
          <Button className="bg-white btn-light text-black shadow bg-white rounded">+ Virtual Card</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
