import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CertificateGenerator from './Components/CertificateGenerator';
import VerificationPage from './Components/VerificationPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
 // Import CertificateDisplay
import Header from './Components/Header'; // Import Header
import Footer from './Components/Footer'; // Import Footer

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Include Header at the top */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate-certificate" element={<CertificateGenerator />} />
            <Route path="/verify" element={<VerificationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          
          </Routes>
        </main>
        <Footer /> {/* Include Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
