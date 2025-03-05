import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Resume Builder</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-violet-800 md:bg-transparent md:w-auto p-5 md:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          } md:flex-row md:space-x-4`}
        >
          <li>
            <Link to="/" className="block py-2 md:inline hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/description" className="block py-2 md:inline hover:underline">
              Description
            </Link>
          </li>
          <li>
            <Link to="/form" className="block py-2 md:inline hover:underline">
              Form
            </Link>
          </li>
          <li>
            <Link to="/preview" className="block py-2 md:inline hover:underline">
              Preview
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
