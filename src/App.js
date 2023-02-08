import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Forgotpass from "./Forgotpass";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/forgot" element={<Forgotpass />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
