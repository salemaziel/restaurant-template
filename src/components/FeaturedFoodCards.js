import React from "react";
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

//return (

  const settings = {
    className: "plzwork",
    initialSlide: 0,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 5,
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
  };

function FeaturedFoodCards(props) {
//class FeaturedFoodCards extends React.Component {
//  constructor() {
//    super();

//    this.state = {};
//  }



    return (
      <Row className="justify-content-center">
          {props.items.map((item, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card /*style={{whiteSpace: "normal",
          border: '0',
                        /*boxShadow: 'inset 0 0 0 2px rgba(144, 144, 144, 0.25)'* / padding: '0'}}*/
              >
                <Card.Img
                  variant="top"
                  src={item.headerImage} /*fluid={true}*/
                />
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  {/*<div className="FeaturedFoods__avatar-wrapper">
                <Avatar src={item.avatarImage} alt={item.name} size="128px" />
      </div>*/}
                  <h3 className="font-weight-bold mb-0 mt-4">{item.name}</h3>
                  <small>{item.role}</small>
                  <Card.Text className="mt-4">{item.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    );
  }

export default FeaturedFoodCards;
