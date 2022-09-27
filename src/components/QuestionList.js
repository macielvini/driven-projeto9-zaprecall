import styled from "styled-components";
import Question from "./Question";

function QuestionList() {
  const questions = [
    // { question: "", answer: "" },
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
  ];
  return (
    <QuestionWrapper>
      {questions.map((q, i) => (
        <Question question={q} key={i} index={i + 1} />
      ))}
    </QuestionWrapper>
  );
}

export default QuestionList;

const QuestionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-top: 50px;
`;
