import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => (
    <div>
    
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(to right, #692022, #1b1819)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
      <iframe src="https://giphy.com/embed/4R9AFLtsL5Y08" width="480" height="184" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><div class="blink_me">&copy; 2018 Game Board By <a href="" >Bonifase</a></div></p>
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
            background: "rgba(20,12,10, .7)",
            lineHeight: "3rem"
          }}
        >
          BECOME A GAMER!
        </h1>
        <br />
        <div className="text-center">
          <Link
            to="/signup"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#9c0b0e",
              border: "none"
            }}
          >
            JOIN THE PARTY!
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
);

export default HomePage;