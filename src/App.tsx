import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Dict from "pages/Dict";
import Survey from "pages/Survey";
import Login from "pages/Login";
import SignIn from "pages/SignIn";

function App() {
  document.cookie = "safeCookie1=foo; SameSite=Lax";
  document.cookie = "safeCookie2=foo";
  document.cookie = "crossCookie=bar; SameSite=None; Secure";
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dict" element={<Dict />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
