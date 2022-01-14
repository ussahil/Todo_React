import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || "submit"}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
