import styled from "styled-components";
import PlayIcon from "../assets/img/play-outline-icon.svg";

function Question(props) {
  const { question, index } = props;
  return (
    <>
      <Flashcard>
        <BoldText>Pergunta {index}</BoldText>
        <img src={PlayIcon} alt="" />
      </Flashcard>
    </>
  );
}

export default Question;

const Flashcard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  width: 300px;
  height: 65px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  img {
    height: 23px;
  }
`;

const BoldText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
