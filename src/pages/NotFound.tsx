import React from "react";
import { Link } from "react-router-dom";
import SynapseLogo from "../components/SynapseLogo";

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
    <div className="text-center max-w-xl">
      <div className="flex justify-center mb-10">
        <SynapseLogo variant="light" size="lg" />
      </div>
      <h1 className="font-display text-7xl font-black text-gradient-mix mb-4">404</h1>
      <h2 className="font-display text-2xl text-white font-bold mb-4">Page Not Found</h2>
      <p className="text-white/70 mb-8">The page you are looking for has moved or no longer exists.</p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  </div>
);

export default NotFound;
