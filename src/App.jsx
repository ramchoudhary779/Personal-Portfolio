import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ContactForm from './components/Contact';
import Projects from './components/Projects';



function App() {

  return (
    <BrowserRouter>
     <div className="w-full h-screen bg-gray-600">
       <div>
             <Navbar />
             <Hero />
             <About />
             <Experience />
             <Projects />
             <ContactForm />
       </div>
     </div>
   
    </BrowserRouter>
  )
}

export default App
