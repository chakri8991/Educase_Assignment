import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background: #F7F8F9;
  }
`;

export const MainDiv = styled.div`
  width: 375px;
  height: 812px;
  background: #F7F8F9;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const HeadingStyle = styled.p`
    margin-top: 40px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    color: #1D2226;
    width: 188px;
`;

export const ParaStyle = styled.p`
    margin-top: 0px;
    font-size: 18px;
    line-height: 26px;
    color: #1D2226;
    opacity: 0.6;
    width: 232px;
`;

export const EmailLabel = styled.label`
 font-size: 13px;
    color: #6C25FF;
    margin-left: 15px;
    position: absolute;
    top: 294px;
    background:#F7F8F9;
    width: 103px;

`;

export const EmailInput = styled.input`
  margin-top: 8px;
  width: 335px;
  height: 40px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  padding: 8px;
  box-sizing: border-box;
  padding-left: 18px;

`;


export const Passlabel = styled.label`
 font-size: 13px;
    color: #6C25FF;
    margin-left: 15px;
    position: absolute;
    top: 342px;
    background:#F7F8F9;
    width: 103px;


`;

export const PassInput = styled.input`
  margin-top: 8px;
    width: 335px;
  height: 40px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  padding: 8px;
  box-sizing: border-box;
  padding-left: 18px;

`;

export const ButtonEle = styled.button`
  margin-top: 24px;
  width: 335px;
  height: 46px;
  background: #CBCBCB;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
