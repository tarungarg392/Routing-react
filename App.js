import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserProfile from './Components/UserProfile';
import NotFound from './Components/NotFound';


function App() {
  return (
    <Router>
      
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/user/:username/:age" element={<UserProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
