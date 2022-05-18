import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Navbar setTheme={setTheme} theme={theme} />
        <AnimatedRoutes />
        <div className="bottom"></div>
      </Router>
    </div>
  );
}

export default App;
