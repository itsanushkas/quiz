import React from "react";
import "./Quiz.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import questions from "../../script";
import image from "../Image/bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";

const Quiz = ({ setScore }) => {
  const navigate = useNavigate();
  const [quesNo, setQuesNo] = useState(0);
  const [btnColor, setBtnColor] = useState("normal");
  const [seconds, setSeconds] = useState(60);
  const [clickedId, setclickedId] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const [corretAnswerCount, setCorretAnswerCount] = useState(0);

  const finishQuiz = useCallback(() => {
    setScore(seconds * corretAnswerCount);
    navigate("result");
  }, [setScore, seconds, corretAnswerCount, navigate]);

  // const finishQuiz = () => {
  //   setScore(seconds * corretAnswerCount);
  //   navigate("result");
  // };

  useEffect(() => {
    if (seconds <= 0) {
      finishQuiz();
    }

    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds, finishQuiz]);

  const next = () => {
    setClicked(false);
    setclickedId(-1);
    if (quesNo === questions.length - 1) {
      finishQuiz();
    } else {
      setQuesNo(quesNo + 1);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="quiz-page"
    >
      <Card style={{ maxHeight: "90%" }}>
        <Card.Body style={{}}>
          <Card.Title>
            <h3>{questions[quesNo].questionText}</h3>
          </Card.Title>

          <div className="option-Cont">
            {questions[quesNo].options.map((option) => (
              <Button
                key={option.id}
                className={`${
                  clickedId === option.id ? btnColor : "normal"
                } option-button `}
                onClick={(event) => {
                  if (!clicked) {
                    setClicked(true);
                    setclickedId(option.id);
                    if (event.target.innerText === questions[quesNo].answer) {
                      setBtnColor("green");
                      setCorretAnswerCount(corretAnswerCount + 1);
                    } else {
                      setBtnColor("red");
                      setSeconds(seconds - 10);
                    }
                  }
                }}
              >
                {option.text}
              </Button>
            ))}
          </div>
          <div className="quiz-footer">
            <div className="timer-cont">
              <div className="timer">{seconds < 0 ? 0 : seconds}</div>
            </div>

            <div className="next-btn-cont">
              <Button className="next-btn" onClick={next}>
                {quesNo === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
