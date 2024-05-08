import React from "react";
import styled from "styled-components";
import DownArrow from ".././icons/DownArrow";

const UserButton = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;

  width: 125px;
  height: 20px;
  position: relative;
`;

function Button({ text }) {
  return (
    <>
      <UserButton>
        {text} <DownArrow />{" "}
      </UserButton>
    </>
  );
}

export default Button;
