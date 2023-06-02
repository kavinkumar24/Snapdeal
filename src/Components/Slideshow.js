import React from 'react';
import { Card, Carousel, Nav } from 'react-bootstrap';
import './Styles/Slideshow.css'
const Slideshow = () => {
  return (
    <>
    <Card className='slideshow'>
      <Card.Body>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 img1" src="https://i.sdlcdn.com/static/img/marketing-mailers/mailer/2016/UserGrowth/transactional__images/credit-card/landingPage/pageHeader.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.opindia.com/wp-content/uploads/2022/12/Digital-Health-Incentive-Scheme.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img3" src="https://i.pinimg.com/originals/70/6f/29/706f29b3dbbf8cd4cf48a97cdee02a77.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img3" src="https://www.graphbaron.com/images/kids-wear-banner-design.jpg" alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
      <Nav variant="tabs" style={{color:'black',position:'relative',left:'100px',marginRight: '20px'}}>
    <Nav.Item>
    <Nav.Link href="#toys" style={{color:'black',marginRight: '40px'}}>Toys</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#kitchen" style={{color:'black',marginRight: '50px'}}>Kitchen</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#dress" style={{color:'black',marginRight: '50px'}}>Dress</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#health" style={{color:'black'}}>Health</Nav.Link>
    </Nav.Item>
    </Nav>
    </Card>
    
</>
    
  );
};

export default Slideshow;
