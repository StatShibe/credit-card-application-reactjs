import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import img1 from '../images/carousel-img1.jpg';  
import img2 from '../images/carousel-img2.jpg';
import img3 from '../images/carousel-img3.jpg';
function DisplayCarousel() {  
  
  return (   
    <div>  
    <Carousel>  
  <Carousel.Item>  
  <img style={{maxHeight:"500px"}}  
      className="d-block w-100"  
      src={img1}  
      alt="First slide"  
    />  
    <Carousel.Caption>  
      <h3>Applying for a Credit Card is just a click away!</h3>  
      <p>Grab your own credit card by applying online</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>
    <img style={{maxHeight:"500px"}} 
      className="d-block w-100"  
      src={img2}  
      alt="Second slide"  
    />  
  
    <Carousel.Caption>  
      <h3>Special benefits for using Credit card during festival time!</h3>  
      <p>Cashback and bonus benefits while shopping with selected vendors</p>  
      <p>Join soon</p>
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  style={{maxHeight:"500px"}}
      className="d-block w-100"  
      src={img3}  
      alt="Third slide"  
    />
  
    <Carousel.Caption>  
      <h3>Enjoy exclusive credit score scaling interests!</h3>  
      <p>You got a good credit score, then we got you!!</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  
  );  
}  
export default DisplayCarousel;  