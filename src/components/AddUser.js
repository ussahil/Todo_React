import { useState } from "react";
import style from "./AddUser.module.css";
const AddUser = () => {
  //useState
  const [newData, setNewData] = useState("");

  return (
    <form>
      <h3 className={style.taskTitle}>Enter Task</h3>
      <label htmlFor="task"></label>
      <input
        id="task"
        className={style.taskInput}
        placeholder="Enter Task "
      ></input>
    </form>
  );
};

export default AddUser;
