import React from "react";
import styled from "styled-components";
import PlayIcon from "../assets/img/play-outline-icon.svg";
import RotateIcon from "../assets/img/setinha.png";
import Colors from "./Colors";

function Question({ questionObject, index, NormalText }) {
  const { question, answer } = questionObject;
  const [isOpened, setIsOpened] = React.useState(false);

  const [cardText, setCardText] = React.useState(question);

  return (
    <>
      {isOpened ? (
        <FlashcardOpened>
          <NormalText>{cardText}</NormalText>
          <img src={RotateIcon} alt="" onClick={() => setCardText(answer)} />
        </FlashcardOpened>
      ) : (
        <Flashcard>
          <QuestionTitle>Pergunta {index}</QuestionTitle>
          <img src={PlayIcon} alt="" onClick={() => setIsOpened(true)} />
        </Flashcard>
      )}
    </>
  );
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

  img {
    height: 23px;
    cursor: pointer;
  }
`;

const FlashcardOpened = styled(Flashcard)`
  display: block;
  min-height: 130px;
  background-color: ${Colors().bgCard};
  padding: 20px 10px;

  position: relative;

  img {
    position: absolute;
    right: 15px;
    bottom: 6px;

    width: 30px;
    height: 20px;
  }
`;
