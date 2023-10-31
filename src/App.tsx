import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Dict from "pages/Dict";
import Survey from "pages/Survey";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dict" element={<Dict />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
