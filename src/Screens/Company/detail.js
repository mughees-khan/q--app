import "./company.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Detail() {
  const [token, setToken] = useState(0);
  const [currenttoken, setcurrentToken] = useState(0);
  const location = useLocation();
  location.state.data.totalToken >= currenttoken
    ? setTimeout(() => {
        setcurrentToken(currenttoken + 1);
      }, 60000)
    : setcurrentToken(0);
  return (
    <div className="detail">
      <div className="detail-text">
        <div>
          <img className="imgs" src={location.state.data.imageUrl} alt="" />
        </div>
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
      <div className="token-main">
        <div className="total-token">
          <h1>Total Tokens</h1>
          <h1 className="token-no">{location.state.data.totalToken}</h1>
        </div>
        <div className="total-token">
          <h1>Current</h1>
          <h1 className="token-no">{currenttoken}</h1>
        </div>
        <div className="buy-token">
          <button
            onClick={
              location.state.data.totalToken >= token
                ? () => setToken(token + 1)
                : setToken(0)
            }
            className="token-btn"
          >
            Buy Token
          </button>
          <h1 className="token-no">{token}</h1>
        </div>
      </div>
    </div>
  );
}
export default Detail;
