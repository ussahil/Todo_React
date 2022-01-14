import Button from "../UI/Button";
import "./AddUser.css";
const AddUser = (props) => {
  console.log(props.data);
  const data = props.data;
  // for delete I have to pass the data back to the state/app one;

  return (
    // <div></div>
    <ul>
      {data.map((user) => (
        <li key={user[0].id} className="list">
          {user[0].enteredData}
          <Button type="" id={user[0].id} onClick={props.onConfirm}>
            delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AddUser;
