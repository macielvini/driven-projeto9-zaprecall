import styled from "styled-components";
import COLORS from "./Colors";

function CardAnswer({ questionObj, setQuestion }) {
  const { status } = questionObj;

  function updateQuestionStatus(newStatus) {
    if (status === "opened") {
      const uptQuestion = { ...questionObj, status: newStatus };
      setQuestion(uptQuestion);
      console.log(newStatus);
      return;
    }

    alert("Abra uma questão primeiro");
  }

  return (
    <Footer>
      <AnswerList>
        <Forgot onClick={() => updateQuestionStatus("forgot")}>Esqueci</Forgot>
        <AlmostForgot onClick={() => updateQuestionStatus("almostForgot")}>
          Quase não lembrei
        </AlmostForgot>
        <Zap onClick={() => updateQuestionStatus("zap")}>Zap!</Zap>
      </AnswerList>
      <Result>0/4 CONCLUÍDOS</Result>
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

  cursor: pointer;
`;

const Forgot = styled(Answer)`
  background-color: ${COLORS.bgForgot};
`;

const AlmostForgot = styled(Answer)`
  background-color: ${COLORS.bgAlmostForgot};
`;

const Zap = styled(Answer)`
  background-color: ${COLORS.bgZap};
`;

const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  background-color: #fff;
  padding: 9px 0 20px;

  border-radius: 0 0 20px 20px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Result = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;
