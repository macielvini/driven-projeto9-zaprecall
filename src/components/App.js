import React from "react";
import { ReactDOM } from "react-dom";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import Header from "./Header";
import CardAnswer from "./CardAnswer";

const colors = {
  bgColor: "#fb6b6b",
  bgCard: "#ffffd4",
  bgForgot: "#ff3030",
  bgAlmostForgot: "#ff922e",
  bgZap: "#2fbe34",
  black: "#333333",
};

function App() {
  return (
    <>
      <GlobalStyle />
      <PhoneScreen>
        <Header />
        <CardAnswer colors={colors} NormalText={NormalText} />
      </PhoneScreen>
    </>
  );
}

export default App;

const PhoneScreen = styled.div`
  width: 375px;
  height: 667px;
  background: #fb6b6b;

  padding: 42px 37px 0px;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

const NormalText = styled.p`
  font-size: 18px;
`;

const BoldText = styled.p`
  font-size: 16px;
`;
