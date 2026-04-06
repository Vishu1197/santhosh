import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-maroon text-white p-4 flex justify-between">
    <h1 className="font-bold">Santhosh V V</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/career">Career</Link>
      <Link to="/blog">Insights</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-10">
    <h2 className="text-4xl font-bold text-maroon">Global FMCG Leader</h2>
    <p className="mt-4 text-lg">
      Global Head – FMCG Practice @ Kearney
    </p>
    <p className="mt-4 max-w-2xl">
      Driving transformation, growth strategy, and operational excellence across global FMCG markets.
    </p>
  </div>
);

const Career = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold text-maroon mb-6">Career Pathway</h2>
    <div className="space-y-6">
      <div className="border-l-4 border-maroon pl-4">
        <h3 className="font-bold">Kearney</h3>
        <p>Global Head – FMCG Practice</p>
      </div>
      <div className="border-l-4 border-maroon pl-4">
        <h3 className="font-bold">Previous Roles</h3>
        <p>Strategy, Consulting & Transformation Leadership</p>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold text-maroon mb-4">Daily Insights</h2>
    <div className="border p-4 rounded">
      <h3 className="font-bold">FMCG Trends</h3>
      <p>Your daily strategic insights go here...</p>
    </div>
  </div>
);

const Achievements = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold text-maroon mb-4">Achievements</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Led global FMCG transformation programs</li>
      <li>Advised Fortune 500 companies</li>
      <li>Delivered high-impact strategic outcomes</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="p-10 flex justify-center">
    <div className="border p-6 rounded shadow bg-white w-80">
      <h2 className="text-xl font-bold text-maroon">Santhosh V V</h2>
      <p>Global Head – FMCG, Kearney</p>
      <p className="mt-2">📧 your@email.com</p>
      <p>📞 +91-XXXXXXXXXX</p>
      <p className="mt-2">LinkedIn: santhoshvv</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
