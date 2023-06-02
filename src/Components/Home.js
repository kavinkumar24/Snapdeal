import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import './Styles/Home.css'
import Logo from './images/Company_logo.png'
const Home = () => {
  return (
    <>
      <Navbar variant="dark" className='p-0' style={{ backgroundColor: '#c6003d' }}>
        <Nav className="mr-auto p-0 white-text" style={{ fontSize: '15px',padding:'0px'}}>
          <h6 style={{color:'white',position:'relative',marginLeft:'30px'}}>Brand waali Quality, Bazaar waali Deal</h6>
        </Nav>
        <Nav className="ms-auto mr-0 p-0 white-text" style={{ fontSize: '12px',padding:'0px',color:'white',marginRight:'60px'}}>
          <Nav.Link href="#home" className='white-text'>Impact@Snapdeal</Nav.Link>
          <Nav.Link href="#link"className='white-text'>Gift Cards</Nav.Link>
          <Nav.Link href="#link"className='white-text'>Help Center</Nav.Link>
          <Nav.Link href="#link"className='white-text'>Sell On Snapdeal</Nav.Link>
          <Nav.Link href="#link"className='white-text'>Download app</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar expand="lg" style={{backgroundColor:'#e40046'}} className='p-3'>
        <img src={Logo} alt='logo' className='logo_img'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <FormControl type="text" placeholder="Search Products and brands" className="mr-sm-2 wide no-border-radius" />
        
          <Button  className='no-border-radius btn-bg'><i class="fa fa-search icon"></i>Search</Button>
          
        </Form>
          <Nav className="ml-auto" style={{marginRight:'70px'}}>
            <div class="vr"></div>
            <Nav.Link href="#home" className='cart'>Cart<i class="fa fa-shopping-cart cart_icon"></i></Nav.Link>
            <Nav.Link href="#link" className='signin'>Sign In<i class='fas fa-user-alt sigin_in_logo'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Card id='card_pincode'>
      <Card.Img className="pincode_img"variant="top" src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-locationpincampingholidaymap-flat-icon--green-and-yellow-png-image_1182604.jpg" />
      <Card.Body>
        <Form>
          <Form.Label className='label_pincode'>Enter the pincode to check availability and faster delivery options</Form.Label>
          <FormControl type="text" placeholder="Enter pincode" />
          <div className="d-flex justify-content-between mt-3">
            <Button variant="dark">Submit</Button>
            <Button variant="light">Next</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    <h1 className='trending-products-heading'>
    TRENDING PRODUCTS
    </h1>
    </>
  );
};

export default Home;
