import React from "react";
import styled from "styled-components";
import PlayIcon from "../assets/img/play-outline-icon.svg";
import RotateIcon from "../assets/img/setinha.png";

function Question(props) {
  const { questionObject, index, colors, NormalText } = props;
  const { question, answer } = questionObject;
  const [isOpened, setIsOpened] = React.useState(false);

  const Flashcard = styled.li`
    display: ${(props) => (props.isOpened ? "none" : "block")};

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
    min-height: 130px;
    display: ${(props) => (props.isOpened ? "block" : "none")};
    background-color: ${colors.bgCard};
    padding: 20px 10px;

    position: relative;

    img {
      position: absolute;
      right: 15px;
      bottom: 6px;

      idth: 30px;
      height: 20px;
    }
  `;

  return (
    <>
      <Flashcard isOpened={isOpened}>
        <BoldText>Pergunta {index}</BoldText>
        <img src={PlayIcon} alt="" onClick={() => setIsOpened(true)} />
      </Flashcard>

      <FlashcardOpened isOpened={isOpened}>
        <NormalText>{question}</NormalText>
        <img src={RotateIcon} alt="" />
      </FlashcardOpened>
    </>
  );
}

export default Question;

const BoldText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
