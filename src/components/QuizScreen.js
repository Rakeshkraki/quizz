import React from "react";
import QuestionList from "./data/questions.json";
import { useState } from "react";
import Question from "./data/Question";
import QuizResult from "./QuizResult";
import "../index.css";

function QuizScreen({ retry }) {
  const [markedAnswers, setmarkedAnswer] = useState(
    new Array(QuestionList.length)
  );
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  function caluclatedResult() {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex === markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  }

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult result={caluclatedResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setmarkedAnswer((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setcurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default QuizScreen;
