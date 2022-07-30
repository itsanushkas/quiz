import React from "react";
import "./Highscore.css";
import image from "../Image/bg.jpg";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Highscore = () => {
  const [highScoreState, setHighScoreState] = useState(true);
  let navigate = useNavigate();
  const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
  console.log(highScore);

  useEffect(() => {
    setHighScoreState(highScore.length === 0 ? true : false);
  }, [highScore.length]);

  const clearHighScore = () => {
    localStorage.setItem("highScores", JSON.stringify([]));
    setHighScoreState(true);
  };
  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="highscore-page"
    >
      <Card>
        <Card.Body className="text-center">
          <Card.Title>
            <h3>✮HighScore✮</h3>
          </Card.Title>
          <Card.Text style={{ marginTop: "4em" }}>
            {highScoreState
              ? `NO HIGHSCORES YET`
              : highScore.map((highScore, number = 0) => (
                  <div key={highScore.id}>
                    {`${number + 1}. ${highScore.name} : ${
                      highScore.highscore
                    }`}
                  </div>
                ))}
          </Card.Text>
          <div className="btn-holder">
            <div className="btn-cont">
              <Button onClick={() => navigate("/")}>BACK</Button>
            </div>
            <div className="btn-cont">
              <Button onClick={clearHighScore}>Clear Highscore</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Highscore;
