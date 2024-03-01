import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"; // For routing pages
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
