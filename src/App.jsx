import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Router>
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
          <Link className="font-bold" to="/">
            Home
          </Link>
          <Link to="/favorites" className="font-bold">
            Favorites
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
