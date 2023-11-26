import { useState } from "react";
import "./App.css";
import QuizScreen from "./components/QuizScreen.js";
import JoinScreen from "./components/JoinScreen.js";
import Navbar from "./components/Navbar.js";

function App() {
  const [isQuizStarted, setisQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setisQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setisQuizStarted(true)} />
        )}
      </div>
    </>
  );
}

export default App;
