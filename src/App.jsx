import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar'
import Navbar1 from "./components/Navbar1"

/* Home pages */
import Home from './pages/HomePages/Home'
import About from "./pages/HomePages/About"
import ManagementCommunity from "./pages/HomePages/ManagementCommunity"
import Events from "./pages/HomePages/Events"
import AdvisoryBoard from "./pages/HomePages/AdvisoryBoard"
import Members from "./pages/HomePages/Members"

/* Projects pages */
import Projects from './pages/ProjectsPages/Projects'
import Education from "./pages/ProjectsPages/Education"
import JobOriented from "./pages/ProjectsPages/JobOriented"
import SelfHelpGroup from "./pages/ProjectsPages/SelfHelpGroup"
import SelfEmployment from "./pages/ProjectsPages/SelfEmployment"

import Partner from './pages/Partner'
import Volunteers from './pages/Volunteers'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

import BecomeAVolunteer from "./pages/BecomeAVolunteer"

import "../CSS/font.css"
import {FooterComponent} from "./components/Footer"



function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
    <Navbar1/>
    <Navbar/>
    <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/managementcommunity" element={<ManagementCommunity/>} />
      <Route path="/advisoryboard" element={<AdvisoryBoard/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/members" element={<Members/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/job-oriented" element={<JobOriented/>}/>
      <Route path="/self-help-groups" element={<SelfHelpGroup/>}/>
      <Route path="/self-employment" element={<SelfEmployment/>}/>

      <Route path="/partner" element={<Partner/>}/>
      <Route path="/volunteers" element={<Volunteers/>}/>
      <Route path="/become-volunteer" element={<BecomeAVolunteer/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </main>
    <FooterComponent/>
    </div>
    </BrowserRouter>
  )
}

export default App
