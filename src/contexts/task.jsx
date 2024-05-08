import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  let taskName, formattedDate, formattedTime;
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");
  const [subTask, setSubTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  function formatDate() {
    const splitDate = date.split("-");

    formattedDate =
      splitDate[1] + "-" + splitDate[2].trim() + "-" + splitDate[0];
    return formattedDate;
  }

  function formatTime() {
    const splitTime = time.split(":");

    const hour = splitTime[0].padStart(2, "0");
    const minutes = splitTime[1].padStart(2, "0");

    const intHour = parseInt(hour);
    const intMinutes = parseInt(minutes);

    if (intHour > 12) {
      convertedHour = hour - 12;
      return (formattedTime = `${convertedHour}:${intMinutes} PM`);
    } else {
      return (formattedTime = `${hour}:${minutes} AM`);
    }
  }

  const handleRemoveTask = (taskId) => {
    const copyOfTasks = [...tasks];

    const filteredTasks = copyOfTasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
  };

  const handleTaskNameInput = (name) => {
    setValue(name);
  };

  const handleSubmittedTaskName = (e) => {
    e.preventDefault();
    setValue("");
  };

  const handleTagInput = (tag) => {
    setTag(tag);
  };

  const handleDataInput = (date) => {
    setDate(date);
  };

  const handleTimeInput = (time) => {
    setTime(time);
  };

  const handleSubTaskInput = (subtask) => {
    setSubTask(subtask);
  };

  const handleSubmittedSubTasks = (e) => {
    e.preventDefault();
    const copyOfSubTasksArray = [...subTasks, subTask];
    setSubTasks(copyOfSubTasksArray);
    setSubTask("");
  };

  const handleSubmittedTags = (e) => {
    e.preventDefault();

    const copyOfTagsArray = [...tags, tag];
    setTags(copyOfTagsArray);
    setTag("");
  };

  const handleRatingsLevelClick = (section, difficultyRating) => {
    if (section === "Complexity") {
      complexityLevel = difficultyRating;
    } else {
      priorityLevel = difficultyRating;
    }
  };

  const handleSubmittedDueDate = () => {};

  const handleSubmittedTime = () => {};

  const handleSubmittedTask = () => {
    const id = uuidv4();
    taskName = value;

    const reformattedDate = formatDate();

    const reformattedTime = formatTime();

    if (!taskName || !reformattedDate || !reformattedTime) return;
    const taskObject = {
      id,
      taskName: value,
      complexityLevel,
      priorityLevel,
      dueDate: reformattedDate,
      timeDue: reformattedTime,
      subTasks,
      tags
    };
    const copyOfTasksArray = [...tasks, taskObject];
    setTasks(copyOfTasksArray);
    setValue("");

    setSubTasks([]);
    setTags([]);
    setValue("");

    setTime("");

    setDate("");
    setTag("");
    setSubTask("");
  };

  useEffect(() => {}, [time, date]);

  return (
    <TaskContext.Provider
      value={{
        value,
        setValue,
        tasks,
        setTasks,
        tag,
        subTask,
        handleRatingsLevelClick,
        taskName,
        handleTagInput,
        handleSubTaskInput,
        handleTaskNameInput,
        handleSubmittedTask,
        handleSubmittedTaskName,
        handleSubmittedSubTasks,
        handleSubmittedTags,
        handleSubmittedDueDate,
        handleSubmittedTime,
        handleDataInput,
        handleTimeInput,
        date,
        time,
        subTasks,
        tags,
        handleRemoveTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
