import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <button
        className="home-btn"
        onClick={() => {
          navigate("/add");
        }}
      >
        Company
      </button>
      <button
        onClick={() => {
          navigate("/company");
        }}
        className="home-btn"
      >
        Token
      </button>
    </div>
  );
}
export default Home;
