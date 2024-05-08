import React from "react";
import SearchSVG from ".././icons/SearchSVG";
import styled from "styled-components";
import RightArrowButton from "../icons/RightArrowButton";

const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 400px;
  padding-left: 19px;
  height: 18px;
`;

function SearchBar() {
  return (
    <>
      <InputContainer>
        <SearchSVG />
        <Input />
        <RightArrowButton />
      </InputContainer>
    </>
  );
}

export default SearchBar;
