import React from "react";
import "./LandingPage.css";
import { Card, Button, Container } from "react-bootstrap";
import image from "../Image/bg.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = ({ setQuizActive }) => {
  let navigate = useNavigate(useState);

  const startQuiz = () => {
    setQuizActive(true);
    navigate("quiz");
  };
  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="landing-page"
    >
      <Card style={{ backgroundColor: "#ffffff99" }}>
        <Card.Body className="text-center">
          <Card.Title>
            <h3>✮Coding Quiz Questions✮</h3>
          </Card.Title>
          <Card.Text style={{ marginTop: "4em" }}>
            <h4>
              {" "}
              ⦿ Try to answer the following code-related questions within the
              time limit
            </h4>
          </Card.Text>
          <Card.Text>
            <h4>
              {" "}
              ⦿ Keep in mind that incorrect answers will penalize you score/time
              by ten seconds!
            </h4>
          </Card.Text>
          <Button onClick={startQuiz} variant="primary" size="lg">
            START
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LandingPage;
