import { useState, useEffect } from "react";
import "./company.css";
import logo from "../../images/plus-icon.png";
import { getRealTime } from "../../config/firebase";
import { Link } from "react-router-dom";
function Company() {
  const [company, setCompany] = useState([]);
  function getCompany() {
    getRealTime((ads) => {
      setCompany(ads);
    });
  }
  useEffect(() => {
    getCompany();
  }, []);
  return (
    <div className="company">
      <div className="main-home">
        <h1 className="company-heading">Welcome to companies</h1>
        <div className="img">
          <a href="/form">
            <img className="plus-icon" src={logo} />
          </a>
        </div>
      </div>

      <div>
        {company.map((data) => (
          <div className="company-ads">
            <div className="ad-up">
              <img className="ad-img" src={data.imageUrl} />
            </div>
            <div className="ad-down">
              <h2 className="ad-name">
                NAME
                <br />
                {data.companyName}
              </h2>
              <h3 className="ad-address">
                ADDRESS
                <br />
                {data.address}
              </h3>
              <h3 className="ad-since">
                STARTING
                <br />
                {data.since}
              </h3>
              <h3 className="ad-time">
                TIMINGS <br />
                {data.timing}
              </h3>
              <Link to="/detail" state={{ data }}>
                <button className="token-btn">View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Company;
