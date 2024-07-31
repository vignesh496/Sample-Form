import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DetailsPage from './DetailsPage';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/details', { state: { name, email, mobile, password } });
  };

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded-lg bg-opacity-65 p-8 max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sample Form</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transform transition-transform duration-300 ease-in-out hover:scale-105"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile no.</label>
          <input
            type="text"
            id="mobile"
            className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transform transition-transform duration-300 ease-in-out hover:scale-105"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="h-8 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transform transition-transform duration-300 ease-in-out hover:scale-105"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transform transition-transform duration-300 ease-in-out hover:scale-105"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-emerald-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
