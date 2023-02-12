import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Forgotpass from "./Forgotpass";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tK5Cb" element={<Forgotpass />}></Route>
          <Route path="/register-user" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
