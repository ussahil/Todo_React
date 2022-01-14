import { useState, useRef } from "react";
import Button from "../UI/Button";
import style from "./Header.module.css";
//Todo make it so that input listner listens after a certain delay setTimeout
const Header = (props) => {
  //useState
  const [newData, setNewData] = useState("");
  //useRef
  //inputListner
  const inputListner = (event) => {
    setNewData(event.target.value);
    // console.log(newData);
  };
  //func
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newData === "") {
      alert("error please fill up the task");
      return 1;
    } else {
      props.onSaveData(newData);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h3 className={style.taskTitle}>Enter Task</h3>
      <label htmlFor="task"></label>
      <input
        id="task"
        className={style.taskInput}
        placeholder="Enter Task"
        onChange={inputListner}
      ></input>
      <Button>Add Task</Button>
    </form>
  );
};

export default Header;
