import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const UserButton = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  border-radius: 35px;

  width: 225px;
  height: 24px;
  position: relative;
  background: blue;
  color: white;
`;

function BlueButton({ text }) {
  return (
    <>
      <UserButton>{text}</UserButton>
    </>
  );
}

export default BlueButton;
