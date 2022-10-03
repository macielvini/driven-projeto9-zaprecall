import styled from "styled-components";
import COLORS from "./Colors";

function CardAnswer({
  lastOpenedQuestion,
  updateQuestionStatus,
  questionsLength,
  questionsDone,
}) {
  return (
    <Footer>
      <AnswerList>
        <Forgot
          color={COLORS("forgot")}
          onClick={() => updateQuestionStatus(lastOpenedQuestion, "forgot")}
        >
          Esqueci
        </Forgot>
        <AlmostForgot
          color={COLORS("almostForgot")}
          onClick={() =>
            updateQuestionStatus(lastOpenedQuestion, "almostForgot")
          }
        >
          Quase não lembrei
        </AlmostForgot>
        <Zap
          color={COLORS("zap")}
          onClick={() => updateQuestionStatus(lastOpenedQuestion, "zap")}
        >
          Zap!
        </Zap>
      </AnswerList>
      <Result>
        {questionsDone}/{questionsLength} CONCLUÍDOS
      </Result>
    </Footer>
  );
}

export default CardAnswer;

const AnswerList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Answer = styled.div`
  width: 85px;
  height: 37px;
  color: #fff;
  font-size: 12px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  user-select: none;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Forgot = styled(Answer)`
  background-color: ${COLORS("forgot")};
`;

const AlmostForgot = styled(Answer)`
  background-color: ${COLORS("almostForgot")};
`;

const Zap = styled(Answer)`
  background-color: ${COLORS("zap")};
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  background-color: #fff;
  padding: 9px 0 20px;

  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Result = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;
