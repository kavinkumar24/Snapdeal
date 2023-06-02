import React from 'react';
import { Card } from 'react-bootstrap';
import './Styles/Slideshow.css'

const Items_list = () => {
 const items = [
 {
 image: 'https://staticimg.titan.co.in/Fastrack/Catalog/3089SL05_1.jpg?impolicy=pqlow&imwidth=640',
 label: 'Fastrack watch',
 rating: 4,
 mrp: 2000,
 price: 1800
 },
 {
 image: 'https://tiimg.tistatic.com/fp/1/006/125/red-color-allen-solly-shirts-537.jpg',
 label: 'Allen solley',
 rating: 3,
 mrp: 1200,
 price: 900
 },
 {
 image: 'https://johnlewis.scene7.com/is/image/JohnLewis/238114207?$rsp-pdp-port-640-82$',
 label: 'Doll',
 rating: 5,
 mrp: 150,
 price: 120
 },
 {
 image: 'https://www.cleveland.com/resizer/TutbFu_cUZ0-Ed1mJh5UE9FrGVw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/63NHDZFRDVFIHHNO6PIL3UGR7M.jpg',
 label: 'Vegetable cutter',
 rating: 2,
 mrp: 400,
 price: 250
 },
 {
 image: 'https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg',
 label: 'Nike shoe',
 rating: 4,
 mrp: 2500,
 price: 1300
 },
 {
 image: 'https://bellavitaorganic.com/cdn/shop/products/600x600-Date.jpg?v=1680081129',
 label: 'BellaVita',
 rating: 3,
 mrp: 3000,
 price: 2500
 }
 ];
 return (
 <Card className='slideshow_items'>
 <Card.Body>
 <div style={{display:'flex', overflowX:'scroll'}}>
 {items.map((item, index) => (
 <div key={index} style={{flex:'0 0 auto', width:'25%', textAlign:'center'}}>
 <img className="d-block w-100" src={item.image} alt={item.label} style={{height:'250px'}} />
 <h3 id='details'>{item.label}</h3>
 <div>
   {[...Array(5)].map((star, i) => {
     const ratingValue = i + 1;
     return (
       <span key={i} className={`fa fa-star ${ratingValue <= item.rating ? 'checked' : ''}`}></span>
     );
   })}
 </div>
 <p><s>MRP: {item.mrp}</s> Price: {item.price}</p>
 </div>
 ))}
 </div>
 </Card.Body>
 </Card>
 );
};

export default Items_list;
