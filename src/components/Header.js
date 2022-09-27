import styled from "styled-components";
import Logo from "../assets/img/logo.png";

function Header() {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="" />
      <div>
        <p>ZapRecall</p>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  img {
    height: 100%;
  }

  display: flex;
  align-items: center;
  gap: 20px;

  height: 60px;
  font-family: "Righteous", cursive;
  font-size: 36px;

  color: #fff;
`;
