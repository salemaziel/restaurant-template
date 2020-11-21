import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
//import Avatar from "./Avatar";
import "./FeaturedFoodCards.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

//return (

//function FeaturedFoodCards2(props) {
  /*
  class FeaturedFoodCards2 extends React.Component {
    constructor() {
      super();

      this.state = {};
  }
}
  const settings = {
    className: "plzwork",
    initialSlide: 0,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 2,
    swipe: true,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          className: "plzwork",
          initialSlide: 0,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 4,
          swipe: true,
          swipeToSlide: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 736,
        settings: {
          className: "plzwork",
          initialSlide: 0,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 3,
          swipe: true,
          swipeToSlide: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "plzwork",
          initialSlide: 0,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 2,
          swipe: true,
          swipeToSlide: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          className: "plzwork",
          initialSlide: 0,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 1.5,
          swipe: true,
          swipeToSlide: true,
          centerMode: false,
        },
      },
    ],
    focusOnSelect: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },

  return (
    <Row className="justify-content-center">
      <Slider {...settings}>
    <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>


          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>


          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>


          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Slider>
    </Row>
  );
  
  }

export default FeaturedFoodCards2;
*/

export default class FeaturedFoodCards2 extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="py-4 mb-4">
        <Slider {...settings}>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg" />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4 plzwork">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Slider>
      </div>
    );
  }
}