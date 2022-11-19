// import './App.css';
import Navigation from "./Components/Navbar";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import Journey from "./pages/Journey";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/journey" element={<Journey />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
