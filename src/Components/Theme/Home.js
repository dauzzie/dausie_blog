import { Redirect } from 'react-router';
import React from 'react';
import styled from "styled-components";
import icon from '../../images/favicon.ico'
const homeButton = styled.button`
  background-image: url(${icon});
  background-color:pink;
  width: 70px;
  height: 70px;
  outline: none;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  color: white;
  text-align: center;
  position: fixed;
  cursor: pointer;
  left: 50px;
  top: 50px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  }`;

  const homeToggle = () => {
    return (
      <homeButton onClick={this.handleOnClick}>
        <a href="https://dauzzie.github.io/"></a>
      </homeButton>
    );
  }

  export default homeToggle;