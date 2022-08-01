import "../index.css";
const ButtonComponent = ({ styleName, text, action }) => {
  return (
    <button className={styleName} onClick={action}>
      {text}
    </button>
  );
};

export default ButtonComponent;
