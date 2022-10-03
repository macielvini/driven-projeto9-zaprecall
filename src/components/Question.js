import React from "react";
import styled from "styled-components";
import RotateIcon from "../assets/img/setinha.png";
import playIcon from "../assets/img/play-outline-icon.svg";
import closeIcon from "../assets/img/close-circle-icon.svg";
import helpIcon from "../assets/img/help-circle-icon.svg";
import checkIcon from "../assets/img/checkmark-circle-icon.svg";
import COLORS from "../colors";

function Question({ questionObj, index, updateQuestionStatus }) {
  const { question, answer, status } = questionObj;

  const icons = {
    forgot: closeIcon,
    almostForgot: helpIcon,
    zap: checkIcon,
  };

  let JSX = (
    <>
      <Flashcard status={status}>
        <QuestionTitle>Pergunta {index + 1}</QuestionTitle>
        <img
          src={!status ? playIcon : icons[status]}
          alt=""
          onClick={() => updateQuestionStatus(questionObj, "opened")}
        />
      </Flashcard>
    </>
  );

  if (status === "opened") {
    JSX = (
      <FlashcardOpened>
        <NormalText>{question}</NormalText>
        <img
          src={RotateIcon}
          alt=""
          onClick={() => updateQuestionStatus(questionObj, "rotated")}
        />
      </FlashcardOpened>
    );
  } else if (status === "rotated") {
    JSX = (
      <FlashcardOpened>
        <NormalText>{answer}</NormalText>
      </FlashcardOpened>
    );
  }

  return JSX;
}

export default Question;

const QuestionTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Flashcard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  width: 70vw;
  max-width: 500px;
  min-width: 200px;
  height: 65px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  color: ${(props) =>
    !props.status ? COLORS("default") : COLORS(props.status)};

  img {
    height: 23px;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    width: 300px;
  }
`;

const FlashcardOpened = styled(Flashcard)`
  display: block;
  min-height: 130px;
  background-color: ${COLORS("cardBackground")};
  padding: 20px 10px;

  position: relative;

  img {
    position: absolute;
    right: 15px;
    bottom: 6px;

    width: 30px;
    height: 20px;

    display: block;
  }
`;

const NormalText = styled.p`
  font-size: 18px;
`;
