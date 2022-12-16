import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        Company
      </button>
      <button>Token</button>
    </div>
  );
}
export default Home;
