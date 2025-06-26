import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillSection';


function App() {

  return (
    <BrowserRouter>
     <div className="w-full h-screen bg-gray-600">
       <div>
             <Navbar />
             <Hero />
             <About />
       </div>
     </div>
   
    </BrowserRouter>
  )
}

export default App
