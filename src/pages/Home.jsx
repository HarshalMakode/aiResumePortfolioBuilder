import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6"> Welcome to Resume Builder</h1>
      <Link to="/description" className="px-6 py-3 bg-violet-800 text-white rounded-lg hover:bg-violet-950 transition">
        Get Started
      </Link>
    </div>
  );
}
