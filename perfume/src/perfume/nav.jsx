

import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Navbar,Nav,Form,Container,Button}from'react-bootstrap';

function TopNav () {
  return (
    <>
    <section id="sec">
    <section id="space">
     
   <Navbar  expand="lg" id="nav" >
     <Container >
       <Navbar.Toggle aria-controls="navbarScroll" className='navbar-toggler'/>
         <Navbar.Collapse id="navbarScroll" className='navbar-nav'>
      <Nav 
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
           >
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#abouts" className='nav-link'>About_us</Nav.Link>
            <NavDropdown title="Catagory" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#brand">KIng</NavDropdown.Item>
              <NavDropdown.Item href="#brand">
                ariti
              </NavDropdown.Item>
              <NavDropdown.Item href="#brand">
                yesua
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <Nav.Link href="#you" className='nav-link'>
              Contact_us
            </Nav.Link>
          </Nav>
          
          <Form className="d-flex ">
            
          <Button className="btn  ">Search
             <Form.Control
              type="search"
              placeholder="Search"
              className="me-6"
              aria-label="Search"
          id='form'
           
            />
          </Button>
           
          </Form>
          <svg   fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" id='color'>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>

<a href="#section"><svg  fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" id="color2">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></a>

        </Navbar.Collapse>
      </Container>
     </Navbar>
     
     </section>
    
</section>

    </>
  
   
  );
}


    
     
export default TopNav