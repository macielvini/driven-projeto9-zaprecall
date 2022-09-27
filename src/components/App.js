import React from "react";
import { ReactDOM } from "react-dom";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import Header from "./Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <PhoneScreen>
        <Header />
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
  justify-content: center;
`;
