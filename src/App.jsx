import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Form from "./pages/Form";
import Preview from "./pages/Preview";
import Navbar from "./components/Navbar";
import './index.css';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/form" element={<Form />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
