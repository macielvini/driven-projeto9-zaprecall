import styled from "styled-components";
import Header from "./Header";
import QuestionList from "./QuestionList";
import StartAppScreen from "./StartScreen";
import React from "react";

export default function PhoneScreen() {
  const [displayInitialScreen, setDisplayInitialScreen] = React.useState(false);

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
  width: 100vw;
  height: 100%;
  background: #fb6b6b;

  @media (min-width: 1000px) {
    width: 100vw;
  }
`;

const MainAppScreen = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 30px 0;

  height: 100%;
`;
