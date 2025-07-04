import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pin from "./pages/Pin";
import Otp from "./pages/Otp";
import "../index.css";
import SecurityQuestionsForm from "./pages/SecurityQuestionsForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/security" element={<SecurityQuestionsForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
