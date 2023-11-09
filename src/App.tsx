import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
