import React from 'react'
import { Card } from 'react-bootstrap';
import MenFashion from './images/men_fashion.jpg'
import Women_fashon from './images/women_fashion.jpg'
import Home_Kitchen from './images/home_Kitchen.jpg'
import Toys from './images/toys.jpg'
import Beauty from './images/beauty.jpg'
import './Styles/Side.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Card className="no-border">
        <Card.Header>TOP CATEGORIES</Card.Header>
        <Card.Body>
    <ul className='no-bullets'>
      <li>
        <img src={MenFashion} className="mens-fashion"alt="Men's Fashion" />
        Men's Fashion
      </li>
      <li style={{marginTop:'10px'}}>
        <img src={Women_fashon}className="Womens-fashion"alt="Women's Fashion" />
        Women's Fashion
      </li>

      <li style={{marginTop:'10px'}}>
        <img src={Home_Kitchen}className="Womens-fashion"alt="Women's Fashion" />
        Home & Kitchen
      </li>
      <li style={{marginTop:'10px'}}>
        <img src={Toys}className="Womens-fashion"alt="Women's Fashion" />
        Toys, kids fashion..
      </li>
      <li style={{marginTop:'10px'}}>
        <img src={Beauty}className="Womens-fashion"alt="Women's Fashion" />
        Beauty, Health & D..
      </li>
      <li style={{marginTop:'15px',marginLeft:'-24px'}}>
      MORE CATEGORIES
      </li>

      <li style={{marginTop:'15px',marginLeft:'-20px'}}>
      Automotives
      </li>
      <li style={{marginTop:'10px',marginLeft:'-20px'}}>
      Mobile & Accessories
      </li>
      <li style={{marginTop:'10px',marginLeft:'-20px'}}>
      Electronics
      </li>
      <li style={{marginTop:'10px',marginLeft:'-20px'}}>
      Sports, Fitness & Outdoor
      </li>
      <li style={{marginTop:'10px',marginLeft:'-20px'}}>
      Computers & Gaming
      </li>
      <li style={{marginTop:'10px',marginLeft:'-20px'}}>
  Books, Media & Music

      </li>
    </ul>
  </Card.Body>
</Card>

    </div>
  )
}
