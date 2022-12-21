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
      </div>

      <div>
        {company.map((data) => (
          <div className="company-ads">
            <div className="ad-down">
              <h2 className="ad-name">
                NAME:
                {data.companyName}
              </h2>
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
