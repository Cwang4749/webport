import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"; // For routing pages
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/AboutMe" element={<AboutMe/>}/>
        <Route exact path="/Portfolio" element={<Portfolio/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Experience" element={<Experience/>}/>
      </Routes>
    </div>
  );
}

export default App;
