import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PatientsPage from "./Pages/PatientsPage";
import About from "./Pages/AboutPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-y-auto pb-4">
      <BrowserRouter>
      <Navbar />
      <div className="max-w-6xl mx-1 md:mx-auto p-5 md:p-10 mt-10 bg-emerald-600 rounded-xl">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    <footer className="mt-10 text-center tracking-wide font-thin">Made by <span className="font-normal text-emerald-800">vaibhav</span> and <span className="font-normal text-emerald-800"> internet</span>.</footer>
    </div>
  );
}
export default App;
