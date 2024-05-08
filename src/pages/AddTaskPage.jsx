import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LeftArrowButton from "../icons/LeftArrowButton";
import Buttons from "../components/Buttons";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PlusIcon from "../icons/PlusIcon";
import BlueButton from "../components/BlueButton";
import { TaskContext } from "../contexts/task";
// import DatePicker from 'react-date-picker';

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 145px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const RatingsSection = styled.section``;

const PriorityLevelHeader = styled.header``;

const PrioritySection = styled.section``;

const ComplexitySection = styled.section``;

const ComplexityLevelHeader = styled.header``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const NameOfTaskForm = styled.form``;

const SubTaskForm = styled.form``;

const TagsForm = styled.form``;

const DateInput = styled.input``;

const TimeInput = styled.input``;

const AddTaskForm = styled.form``;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  width: 30%;
  box-sizing: border-box;
  margin: 1px;
`;

function AddTaskPage() {
  const {
    tasks,
    setTasks,
    value,
    setValue,
    handleSubTaskInput,
    handleTagInput,
    subTask,
    tag,
    handleTaskNameInput,
    handleRatingsLevelClick,
    handleSubmittedTaskName,
    handleSubmittedSubTasks,
    handleSubmittedTags,
    handleSubmittedDueDate,
    handleSubmittedTime,
    handleSubmittedTask,
    handleDataInput,
    handleTimeInput,
    date,
    time,
    subTasks,
    tags
  } = useContext(TaskContext);

  useEffect(() => {}, [subTasks]);

  return (
    <>
      {/* <AddTaskForm> */}
      <Header>
        <Link to="/">
          <LeftArrowButton> </LeftArrowButton>{" "}
        </Link>
        <h5> Add a new Task:</h5>
      </Header>{" "}
      <PageContainer>
        <section class="input">
          <NameOfTaskForm>
            <input
              placeholder="Add task"
              value={value}
              onChange={(e) => handleTaskNameInput(e.target.value)}
            />
          </NameOfTaskForm>
        </section>
        <RatingsSection>
          <ComplexitySection>
            <ComplexityLevelHeader>
              {" "}
              <h5>Select Complexity Level</h5>
            </ComplexityLevelHeader>
            <div>
              <Buttons
                onClick={(text) => handleRatingsLevelClick("Complexity", text)}
              >
                {" "}
              </Buttons>
            </div>
          </ComplexitySection>
          <PrioritySection>
            <PriorityLevelHeader>
              {" "}
              <h5>Select Priority Level</h5>
            </PriorityLevelHeader>
            <div class="buttons">
              <Buttons
                onClick={(text) => handleRatingsLevelClick("Priority", text)}
              >
                {" "}
              </Buttons>
            </div>
          </PrioritySection>
        </RatingsSection>
        <section>
          <div>
            <div>
              <h4> Due Date</h4>
              <DateInput
                type="date"
                value={date}
                onChange={(e) => handleDataInput(e.target.value)}
              />
            </div>

            <div class="select time">
              <h4>Select Time</h4>
              <TimeInput
                type="time"
                value={time}
                onChange={(e) => handleTimeInput(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section>
          <h4>Add CheckList for Subtasks</h4>
          <SubTaskForm onSubmit={handleSubmittedSubTasks}>
            <input
              value={subTask}
              placeholder="Add subtask"
              onChange={(e) => handleSubTaskInput(e.target.value)}
            />
          </SubTaskForm>
        </section>
        <section>
          <InputContainer>
            <h4>Add Tags</h4>
            <Tags>
              {tags.map((tag) => {
                return <Tag> #{tag}</Tag>;
              })}
            </Tags>
            <TagsForm onSubmit={handleSubmittedTags}>
              <Input
                value={tag}
                placeholder="Add tags"
                onChange={(e) => handleTagInput(e.target.value)}
              />
            </TagsForm>
          </InputContainer>
        </section>
      </PageContainer>
      <ButtonWrapper onClick={() => handleSubmittedTask()}>
        <BlueButton text={"Add a Task"}> </BlueButton>
      </ButtonWrapper>
      {/* </AddTaskForm> */}
    </>
  );
}

export default AddTaskPage;
