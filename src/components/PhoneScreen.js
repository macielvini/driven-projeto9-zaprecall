import styled from "styled-components";
import Header from "./Header";
import QuestionList from "./QuestionList";

export default function PhoneScreen(props) {
  return (
    <PhoneScreenWrapper>
      <Header />
      <QuestionList />
    </PhoneScreenWrapper>
  );
}

const PhoneScreenWrapper = styled.div`
  width: 375px;
  height: 667px;
  background: #fb6b6b;

  padding: 42px 37px 0px;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
