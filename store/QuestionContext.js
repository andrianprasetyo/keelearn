import { createContext, useState, useEFFect } from "react";

const QuestionContext = createContext();

export function QuestionContextProvider(props) {
  const initialState = {
    question: [],
    currentQuestion: null,
    currentQuestionNo: 1,
    userAnswer: [],
    progress: 5,
  };
  const [questionState, setQuestionState] = useState(initialState);
  return <QuestionContext.Provider value={(questionState, setQuestionState)}>{props.children}</QuestionContext.Provider>;
}
