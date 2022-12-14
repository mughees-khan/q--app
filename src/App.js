import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Form from "./Screens/Form";
import Company from "./Screens/Company";
import Detail from "./Screens/Company/detail";
import Add from "./Screens/Company/add";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/company" element={<Company />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
