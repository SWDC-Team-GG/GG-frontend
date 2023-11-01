import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Dict from "pages/Dict";
import Survey from "pages/Survey";
import Login from "pages/Login";
import Register from "pages/Register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dict" element={<Dict />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
