import React from "react";
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  return (
    <Router>
    <NavTabs/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="./components/NavTabs" element={<NavTabs/>}/> */}
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    
  </Router>
  )
}

export default App;