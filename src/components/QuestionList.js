import React from "react";
import styled from "styled-components";
import Question from "./Question";
import CardAnswer from "./CardAnswer";
import questions from "../getQuestions";

function QuestionList() {
  const [questionList, setQuestionList] = React.useState(questions);
  const [lastOpenedQuestion, setLastOpenedQuestion] = React.useState();
  const [questionsDone, setQuestionsDone] = React.useState(0);

  function updateQuestionStatus(question, newStatus) {
    if (!question) return;
    else if (newStatus === "opened" && isThereAnOpenedQuestion(questionList)) {
      return;
    }

    question.status = newStatus;
    const newQuestionList = questionList;

    if (question.status === "rotated") {
      setLastOpenedQuestion(question);
    } else {
      setLastOpenedQuestion({});
    }

    setQuestionList([...newQuestionList]);
    setQuestionsDone(updateQuestionsDone(newQuestionList));
  }

  function isThereAnOpenedQuestion(list) {
    const openedQuestionList = list.filter(
      (q) => q.status === "opened" || q.status === "rotated"
    );

    return openedQuestionList.length > 0;
  }

  function updateQuestionsDone(list) {
    const doneQuestions = list.filter(
      (q) =>
        q.status === "forgot" ||
        q.status === "almostForgot" ||
        q.status === "zap"
    );

    return doneQuestions.length;
  }

  return (
    <>
      <QuestionWrapper>
        {questions.map((q, i) => (
          <Question
            key={i}
            questionObj={q}
            index={i}
            updateQuestionStatus={updateQuestionStatus}
            setLastOpenedQuestion={setLastOpenedQuestion}
          />
        ))}
      </QuestionWrapper>

      <CardAnswer
        lastOpenedQuestion={lastOpenedQuestion}
        updateQuestionStatus={updateQuestionStatus}
        questionsLength={questionList.length}
        questionsDone={questionsDone}
      />
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

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
