import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header";
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Dict from "pages/Dict";
import Survey from "pages/Survey";

function App() {
  return (
    <Layout onModal>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dict" element={<Dict />} />
          <Route path="/Survey" element={<Survey />} />
        </Routes>
      </Router>
    </Layout>
  );
}

const Layout = styled.div<{ onModal: boolean }>`
  /* ${(props) => props.onModal && `background-color: rgba(0, 0, 0, 0.1);`} */
`;

export default App;
