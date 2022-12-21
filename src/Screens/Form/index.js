import "./form.css";
import { useState } from "react";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { postcompanyToDb, uploadImage } from "../../config/firebase";
function Form() {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [timing, setTiming] = useState("");
  const [since, setSince] = useState("");
  const [address, setAddress] = useState("");
  const [totalTokens, setTotalTokens] = useState("");
  const [image, setImage] = useState("");
  const upload = (e) => {
    if (e.target.value) {
      setImage(e.target.files[0]);
    }
  };
  async function postCompany() {
    try {
      const imageUrl = await uploadImage(image);
      await postcompanyToDb(
        company,
        timing,
        since,
        address,
        imageUrl,
        totalTokens
      );
      alert("added");
      navigate("/company");
    } catch (e) {
      alert("err");
    }
  }
  return (
    <div className="form">
      <div className="form-box">
        <input
          className="form-field"
          type="text"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="form-field"
          type="text"
          placeholder="since"
          onChange={(e) => setTiming(e.target.value)}
        />
        <input
          className="form-field"
          type="text"
          placeholder="timing"
          onChange={(e) => setSince(e.target.value)}
        />
        <input
          className="form-field"
          type="text"
          placeholder="totalToken"
          onChange={(e) => setTotalTokens(e.target.value)}
        />
        <input
          className="form-field"
          type="text"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input onChange={upload} className="form-field" type="file" />
        <button className="add-btn" onClick={postCompany}>
          add
        </button>
      </div>
    </div>
  );
}
export default Form;
