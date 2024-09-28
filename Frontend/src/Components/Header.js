import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center font-medium">
        <h1 className="text-2xl font-bold">Certify</h1>
        <nav>
          <Link to="/" className="px-3 py-2 hover:bg-violet-700 rounded">Home</Link>
          <Link to="/login" className="px-3 py-2 hover:bg-violet-700  rounded">Login</Link>
           
          <Link to="/register" className="px-3 py-2 hover:bg-violet-700  rounded">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
