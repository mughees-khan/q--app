import "./company.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Detail() {
  const [token, setToken] = useState(0);
  const location = useLocation();
  setTimeout(() => {
    setToken(token + 1);
  }, 60000);
  return (
    <div className="detail">
      <div className="detail-text">
        <div className="text">
          <h2 className="detail-title">Name: </h2>
          <h3 className="detail-info">{location.state.data.companyName}</h3>
        </div>
        <div className="text">
          <h2 className="detail-title">Address: </h2>
          <h3 className="detail-info">{location.state.data.address}</h3>
        </div>
        <div className="text">
          <h2 className="detail-title">Starting: </h2>
          <h3 className="detail-info">{location.state.data.since}</h3>
        </div>
        <div className="text">
          <h2 className="detail-title">Timing: </h2>
          <h3 className="detail-info">{location.state.data.timing}</h3>
        </div>
      </div>
      <div>
        <button onClick={() => setToken(token + 1)} className="token-btn">
          Token
        </button>
        <h1 className="token-no">{token}</h1>
      </div>
    </div>
  );
}
export default Detail;
