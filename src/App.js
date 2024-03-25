import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sister-portfolio" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
