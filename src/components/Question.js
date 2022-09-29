import React from "react";
import styled from "styled-components";
import RotateIcon from "../assets/img/setinha.png";
import playIcon from "../assets/img/play-outline-icon.svg";
import closeIcon from "../assets/img/close-circle-icon.svg";
import helpIcon from "../assets/img/help-circle-icon.svg";
import checkIcon from "../assets/img/checkmark-circle-icon.svg";
import COLORS from "./Colors";

function Question({ questionObj, index, setQuestion }) {
  const { question, answer, status } = questionObj;
  const colors = {
    forgot: COLORS.bgForgot,
    almostForgot: COLORS.bgAlmostForgot,
    zap: COLORS.bgZap,
  };

  function updateQuestionStatus(newStatus) {
    const uptQuestion = { ...questionObj, status: newStatus };
    setQuestion(uptQuestion);
  }

  let JSX = (
    <>
      <Flashcard status={status} statusColor={colors}>
        <QuestionTitle>Pergunta {index + 1}</QuestionTitle>
        <img
          src={playIcon}
          alt=""
          onClick={() => updateQuestionStatus("opened")}
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
          onClick={() => updateQuestionStatus("rotated")}
        />
      </FlashcardOpened>
    );
  }

  if (status === "rotated") {
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
  flex-shrink: 0;
  padding: 0 15px;

  width: 300px;
  height: 65px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  color: ${(props) =>
    !props.status ? COLORS.black : props.statusColor[props.status]};

  img {
    height: 23px;
    cursor: pointer;
    fill: red;
  }
`;

const FlashcardOpened = styled(Flashcard)`
  display: block;
  min-height: 130px;
  background-color: ${COLORS.bgCard};
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
