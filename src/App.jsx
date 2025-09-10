
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
   <div>
<Header/>
{/* <Home/>
<Contact/> */}
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skills' element={<Skills/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
{/* <Projects/>
<Skills/> */}
<Footer/>
   </div>
   
  );
}

export default App;
