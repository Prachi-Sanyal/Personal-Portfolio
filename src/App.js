import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProjectForm from "./components/ProjectForm";
import CertificationForm from "./components/CertificationForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectDetails from "./components/ProjectDetails"; // make sure this exists
import ProtectedRoute from "./components/ProtectedRoute"; // make sure this exists

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <Experience />
              <Skills />
              <Projects />  
              <Certifications />
              <Education />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/secret-admin" element={<AdminLogin />} />
          <Route path="/secret-admin/dashboard" element={<ProtectedRoute><AdminDashboard /> </ProtectedRoute>} />
          <Route path="/secret-admin/add" element={<ProjectForm />} />
          <Route path="/secret-admin/edit/:id" element={<ProjectForm isEdit={true} />} />
<Route
 path="/secret-admin/add-certification"
 element={<CertificationForm />}
/>

<Route
 path="/secret-admin/add-experience"
 element={<ExperienceForm />}
/>
          {/* Project Detail Page */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
