import './App.css';
import { Routes, Route} from "react-router-dom"; // For routing pages
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Import all pages
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ProjectDetails from './components/ProjectDetails';

import HelpModal from './components/HelpModal'; // Help modal is on all pages
import PageError from './components/PageError'; // 404 page

function App() {
  const loc = useLocation();
  return (
    <div className="App">
      <HelpModal/>
      <AnimatePresence mode="wait" initial={true}>
        <Routes onEnter={() => window.scrollTo(0, 0)} location={loc} key={loc.key}>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/AboutMe" element={<AboutMe/>}/>
          <Route exact path="/Portfolio" element={<Portfolio/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Experience" element={<Experience/>}/>
          <Route path="/Portfolio/:state" element={<ProjectDetails/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
