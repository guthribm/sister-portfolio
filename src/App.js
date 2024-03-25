import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { MyProjects } from "./components/MyProjects/MyProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes element={<Outlet />}>
        <Route path="/sister-portfolio" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
