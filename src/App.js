import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";

function App() {
  //func for id
  //use State for generating an id
  const [newSaData, setNewData] = useState([]);
  const onSaveDataHandler = (enteredData) => {
    // console.log(Data);
    const Data = [
      {
        enteredData,
        id: Math.random().toString(),
        completed: false,
      },
    ];
    setNewData((prevData) => {
      return [...prevData, Data];
    });

    //console.log(Data);
  };
  // console.log(newSaData);
  const deleteTodo = (toBeDeleted) => {
    // console.log(toBeDeleted.target.id);
    const updatedData = newSaData.filter(
      (item) => item[0].id !== toBeDeleted.target.id
    );
    setNewData(updatedData);
  };
  return (
    <div className="App">
      <Header onSaveData={onSaveDataHandler} />
      <AddUser data={newSaData} onConfirm={deleteTodo} />
    </div>
  );
}

export default App;
//create a delete component
// const deleteTodo = (deleteItem) => {
//   //use filter over here
//   setUpdatedState(updatedState.filter((item) => item.id !== deleteItem));
// };
