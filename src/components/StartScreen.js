import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo.png";

function StartAppScreen({ setDisplayInitialScreen }) {
  return (
    <StartScreen>
      <img src={Logo} alt="" />
      <p>ZapRecall</p>
      <div
        className="start-button"
        onClick={() => setDisplayInitialScreen(false)}
      >
        Iniciar Recall!
      </div>
    </StartScreen>
  );
}

export default StartAppScreen;

const StartScreen = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  img {
    width: 136px;
    height: 161px;
  }

  p {
    color: #fff;
    font-family: "Righteous";
    font-size: 36px;
  }

  .start-button {
    width: 246px;
    height: 54px;

    color: #d70900;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    /* border: 1px solid #d70900; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    cursor: pointer;

    transition: all 200ms ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px rgba(255, 255, 255, 0.5);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;
