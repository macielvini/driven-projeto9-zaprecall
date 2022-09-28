import styled from "styled-components";
import Colors from "./Colors";

function CardAnswer(props) {
  const { NormalText } = props;

  const Forgot = styled(Answer)`
    background-color: ${Colors().bgForgot};
  `;

  const AlmostForgot = styled(Answer)`
    background-color: ${Colors().bgAlmostForgot};
  `;

  const Zap = styled(Answer)`
    background-color: ${Colors().bgZap};
  `;

  const Result = styled(NormalText)`
    margin-top: 20px;
    text-align: center;
  `;

  return (
    <Footer>
      <AnswerList>
        <Forgot>Esqueci</Forgot>
        <AlmostForgot>Quase não lembrei</AlmostForgot>
        <Zap>Zap!</Zap>
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
