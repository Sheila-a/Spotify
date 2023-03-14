import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SongCard from "./components/SongCard";
import Home from "./pages/Home";
import Trends from "./pages/Trends";

// to get the code from our url everytime we access the page
const code = new URLSearchParams(window.location.search).get("token");
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={code ? <Dashboard code={code} /> : <Login />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artist" element={<SongCard code={code} />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
