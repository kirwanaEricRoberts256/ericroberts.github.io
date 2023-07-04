import Contact from './pages/contact'
import About from './pages/about'
import Project from './pages/project'
import Home from './pages/home'
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbars from './pages/navbar'
import CustomNavbar from './components/navbarComponent';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Navbars/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/project" element={<Project/>}/>
<Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
