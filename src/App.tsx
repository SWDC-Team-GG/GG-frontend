import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/section/Header";
import Footer from "./components/section/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
