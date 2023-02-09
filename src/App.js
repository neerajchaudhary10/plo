import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Var from "./components/var/var";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Navbar />} />
        <Route path={"/var"} element={<Var />} />
      </Routes>
    </div>
  );
}

export default App;
