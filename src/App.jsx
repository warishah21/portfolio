import { Navbar } from './Navbar';
import { HeroSec } from './HeroSec';
import './App.css'
import { Skills } from './Skills';
import { Certifications } from './Certifications';
import { MyProject } from './MyProject';
import { Contact } from './Contact';
import { Footer } from './Footer';

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <HeroSec></HeroSec>
    <Skills></Skills>
    <Certifications></Certifications>
    <MyProject></MyProject>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
