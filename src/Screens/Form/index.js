import "./form.css";
import { useState } from "react";
import { async } from "@firebase/util";
import { postcompanyToDb } from "../../config/firebase";
function Form() {
  const [company, setCompany] = useState("");
  const [timing, setTiming] = useState("");
  const [since, setSince] = useState("");
  async function postCompany() {
    try {
      await postcompanyToDb(company, timing, since);
      alert("added");
    } catch (e) {
      alert("err");
    }
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="since"
          onChange={(e) => setTiming(e.target.value)}
        />

        <input
          type="timing"
          placeholder="timing"
          onChange={(e) => setSince(e.target.value)}
        />
        <button onClick={postCompany}>add</button>
      </div>
    </div>
  );
}
export default Form;
