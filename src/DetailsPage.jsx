import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const { name, email, mobile, password } = location.state;

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Details</h2>
        <p className="mb-4"><strong>Name:</strong> {name}</p>
        <p className="mb-4"><strong>Email:</strong> {email}</p>
        <p className="mb-4"><strong>Mobile:</strong> {mobile}</p>
        <p className="mb-4"><strong>Password:</strong> {password}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
