import styled from "styled-components";

export const BackButton = styled.button`
  outline: none;
  border: 1px solid;
  font-size: 20px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  border-radius: 5px;
  padding: 4px 20px 4px 30px;
  cursor: pointer;
  position: relative;
  background-color: ${ props => props.theme.body };
  color: ${ props => props.theme.text };

  :hover {
    background-color: ${ props => props.theme.mode === 'light' ? '#373737' : '#6B8096' };
    color: white;
  }

  :before {
    content: "\\27A4";
    position: absolute;
    transform: translateY(-50%) rotate(180deg);
    left: 10px;
    font-size: 16px;
    top: 54%;
  }
`;
