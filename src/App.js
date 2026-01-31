import './App.css';
import React from "react";
import Weather from './pages/Weather';
import Nearbyhelp from './pages/Nearbyhelp';
import Landing from './pages/Landing';
import ShipCreate from './pages/ShipCreate';
import ShipTrack from './pages/ShipTrack';
import PDFViewer from './components/PDFViewer';
import Contact from './pages/Contact';
import Tips from './pages/Tips';
import Account from './pages/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/loginpage';
import Signuppage from './pages/Signuppage.js';
import { useEffect, useState } from 'react';
import { auth } from './pages/firebase';
import ReportPDF from './pages/Report.pdf'
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    })
  });

  return (
    <div className='App flex flex-col items-center justify-center'>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Signup" element={<Signuppage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/ShipCreate" element={<ShipCreate />} />
        <Route path="/ShipTrack" element={<ShipTrack />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Report" element={<PDFViewer pdfUrl={ReportPDF} />} />
        <Route path="/PDFViewer" element={<PDFViewer />} />
      </Routes>
    </div>
  );
}
export default App;