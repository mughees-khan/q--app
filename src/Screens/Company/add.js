import "./company.css";
import logo from "../../images/plus-icon.png";
function Add() {
  return (
    <div className="add">
      <h1>Add company</h1>
      <a href="/form">
        <img className="plus-icon" src={logo} />
      </a>
    </div>
  );
}
export default Add;
