import React from "react";
import image from "../Image/bg.jpg";
import { useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ score }) => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  const handleChange = (event) => {
    setName(event.target.value);

    console.log("value is:", event.target.value);
  };

  const sumbitResult = () => {
    const highScore = {
      id: highScores.length + 1,
      name: name,
      highscore: score,
    };

    highScores.push(highScore);

    highScores.sort((a, b) => b.highscore - a.highscore);
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    navigate("/Highscore");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="result-page"
    >
      <Card>
        <Card.Body className="text-center">
          <Card.Title>
            <h3>All Done!</h3>
          </Card.Title>
          <Card.Text style={{ marginTop: "2em" }}>
            Your Score Is {score}
          </Card.Text>

          <div>
            <InputGroup className="input-container" onChange={handleChange}>
              <Form.Control
                placeholder="Entr your Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                onClick={sumbitResult}
                variant="outline-secondary"
                id="button-addon2"
              >
                Submit
              </Button>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Result;
