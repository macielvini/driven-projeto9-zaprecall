import styled from "styled-components";
import Header from "./Header";
import QuestionList from "./QuestionList";
import StartAppScreen from "./StartScreen";
import React from "react";

export default function PhoneScreen() {
  const [displayInitialScreen, setDisplayInitialScreen] = React.useState(true);

  return (
    <PhoneScreenWrapper>
      {displayInitialScreen ? (
        <StartAppScreen setDisplayInitialScreen={setDisplayInitialScreen} />
      ) : (
        <MainAppScreen>
          <Header />
          <QuestionList />
        </MainAppScreen>
      )}
    </PhoneScreenWrapper>
  );
}

const PhoneScreenWrapper = styled.div`
  width: 375px;
  height: 667px;
  background: #fb6b6b;

  position: relative;
  overflow: auto;
  border-radius: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const MainAppScreen = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 42px 37px 0px;

  height: 100%;
`;
