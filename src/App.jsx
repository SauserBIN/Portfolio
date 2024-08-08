import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 파일 임포트
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import ProjectDetail1 from './pages/ProjectDetail1';
import ProjectDetail2 from './pages/ProjectDetail2';
import ProjectDetail3 from './pages/ProjectDetail3';
import ProjectDetail4 from './pages/ProjectDetail4';
import ProjectDetail5 from './pages/ProjectDetail5';
import ProjectDetail6 from './pages/ProjectDetail6';
import WebCloning from './pages/WebCloning';
import WebCloningDetail from './pages/WebCloningDetail';
import Contact from './pages/Contact';
import './common.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
<Router basename="/Portfolio/">
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/project" element={<Project />} />
    <Route path="/webcloning-detail/1" element={<ProjectDetail1 />} />
    <Route path="/webcloning-detail/2" element={<ProjectDetail2 />} />
    <Route path="/webcloning-detail/3" element={<ProjectDetail3 />} />
    <Route path="/project-detail/4" element={<ProjectDetail4 />} />
    <Route path="/project-detail/5" element={<ProjectDetail5 />} />
    <Route path="/project-detail/6" element={<ProjectDetail6 />} />
    <Route path="/webcloning" element={<WebCloning />} />
    <Route path="/webcloning-detail/:id" element={<WebCloningDetail />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
  );
};

export default App;
