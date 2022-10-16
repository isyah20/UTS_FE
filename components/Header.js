//import react from "react";
import { Carousel } from "react-bootstrap";
import gb1 from './gb1.jpg';
import gb2 from './gb2.jpg';
import gb3 from './gb3.jpg';

const header = () => {
    return(
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gb1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Fighting</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gb2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Don't give up</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gb3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>God beside you</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default header