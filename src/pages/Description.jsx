import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!description.trim()) {
      alert("Please enter a description!");
      return;
    }
    localStorage.setItem("resumeDescription", description);
    navigate("/form");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4">Describe Your Resume</h2>
      <textarea
        className="w-full max-w-lg h-40 p-3 border rounded-lg mb-4"
        placeholder="Write a short description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit} className="bg-violet-800 text-white px-6 py-3 rounded-lg hover:bg-violet-950 transition">
        Next 
      </button>
    </div>
  );
}
