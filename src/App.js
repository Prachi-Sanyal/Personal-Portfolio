import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails"; // make sure this exists

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
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/secret-admin" element={<AdminLogin />} />
          <Route path="/secret-admin/dashboard" element={<AdminDashboard />} />
          <Route path="/secret-admin/add" element={<ProjectForm />} />
          <Route path="/secret-admin/edit/:id" element={<ProjectForm isEdit={true} />} />

          {/* Project Detail Page */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
