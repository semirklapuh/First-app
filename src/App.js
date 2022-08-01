import "./App.css";
import Home from "./components/Home";
import DataComponent from "./components/DataComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/data" element={<DataComponent />} />
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
