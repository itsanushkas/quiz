import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import Quiz from "../Quiz/Quiz";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.css";
import Result from "../Result/Result";
import Highscore from "../Highscore/Highscore";
import { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [quizActive, setQuizActive] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<LandingPage setQuizActive={setQuizActive} />}
          />
          <Route
            path="/quiz"
            element={
              quizActive ? (
                <Quiz setScore={setScore} />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/quiz/result"
            element={
              quizActive ? (
                <Result score={score} />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route path="/highscore" element={<Highscore />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
