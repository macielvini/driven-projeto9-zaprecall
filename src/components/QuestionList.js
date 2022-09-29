import React from "react";
import styled from "styled-components";
import Question from "./Question";
import CardAnswer from "./CardAnswer";

const questions = [
  // { question: "", answer: "" },
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
    status: "",
  },
  {
    question: "O React é __",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
    status: "",
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula",
    status: "",
  },

  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
    status: "",
  },
];

function QuestionList() {
  const [question, setQuestion] = React.useState(questions[0]);

  return (
    <>
      <QuestionWrapper>
        {/* {questions.map((q, i) => (
          <Question
          />
        ))} */}
        <Question questionObj={question} index={0} setQuestion={setQuestion} />
      </QuestionWrapper>

      <CardAnswer questionObj={question} setQuestion={setQuestion} />
    </>
  );
}

export default QuestionList;

const QuestionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-top: 50px;

  overflow: auto;

  li:last-of-type {
    margin-bottom: 130px;
  }
`;
