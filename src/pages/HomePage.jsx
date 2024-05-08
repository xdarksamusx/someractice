import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SearchBar from ".././components/SearchBar";
import Button from ".././components/Button";
import BlueButton from ".././components/BlueButton";
import { TaskContext } from "../contexts/task";
import TaskBox from "../components/TaskBox";
import { useId } from "react";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BlueButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

function HomePage() {
  const { tasks } = useContext(TaskContext);
  // console.log("tasks on home page", tasks)
  useEffect(() => {}, [tasks]);

  return (
    <>
      <PageContainer>
        <SearchBar />
        <ButtonContainer>
          <Button text={"Sort"}></Button>
          <Button text={"Category"}></Button>
        </ButtonContainer>

        <BlueButtonContainer>
          <BlueButton text={"Power Mode On"} />

          {tasks.length > 0 ? <TaskBox> </TaskBox> : ""}

          <Link to="/todo/addTask">
            {" "}
            <BlueButton text={"Add A New Task"} />
          </Link>
        </BlueButtonContainer>
      </PageContainer>
    </>
  );
}
export default HomePage;
