import "../App.css";
import ButtonComponent from "../components/ButtonComponent";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = () => {
    alert("Info about first app");
  };

  return (
    <div className="App">
      <HeaderComponent />
      <div className="logoStyle">
        <img src="dev.png" alt="dev-logo"></img>
      </div>
      <div style={{ marginTop: "20px" }}>
        <ButtonComponent
          styleName={"button-24"}
          text={"Info"}
          action={handleClick}
        />
        <Link className="linkStyle" to="/data">
          Get data
        </Link>
      </div>
    </div>
  );
};

export default Home;
