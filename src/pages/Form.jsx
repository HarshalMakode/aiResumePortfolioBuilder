import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const description = localStorage.getItem("resumeDescription") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    objective: "",
    education: [{ institution: "", degree: "", percentage: "" }],
    skills: "",
    experience: { company: "", role: "", duration: "" },
    projects: [{ title: "", description: "", tools: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const addField = (key, defaultValues) => {
    setFormData({ ...formData, [key]: [...formData[key], defaultValues] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    navigate("/preview");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      {/* Fixed Header */}
      <h2 className="text-3xl font-bold mt-6">Resume Form</h2>

      {/* Scrollable Form Container */}
      <div className="w-full max-w-lg bg-white shadow-lg p-6 mt-4 rounded-lg overflow-y-auto max-h-[80vh]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
            className="block w-full p-3 border rounded-lg" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            className="block w-full p-3 border rounded-lg" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
            className="block w-full p-3 border rounded-lg" required />
          <input type="text" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange}
            className="block w-full p-3 border rounded-lg" />
          <input type="text" name="github" placeholder="GitHub Profile" value={formData.github} onChange={handleChange}
            className="block w-full p-3 border rounded-lg" />

          <textarea name="objective" placeholder="Objective" value={formData.objective} onChange={handleChange}
            className="block w-full p-3 border rounded-lg"></textarea>

          {/* Education Section */}
          <h3 className="text-xl font-semibold">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Institution" value={edu.institution}
                onChange={(e) => handleArrayChange(index, "institution", e.target.value, "education")}
                className="block w-full p-3 border rounded-lg" required />
              <input type="text" placeholder="Degree" value={edu.degree}
                onChange={(e) => handleArrayChange(index, "degree", e.target.value, "education")}
                className="block w-full p-3 border rounded-lg" required />
              <input type="text" placeholder="Percentage/CGPA" value={edu.percentage}
                onChange={(e) => handleArrayChange(index, "percentage", e.target.value, "education")}
                className="block w-full p-3 border rounded-lg" required />
            </div>
          ))}
          <button type="button" onClick={() => addField("education", { institution: "", degree: "", percentage: "" })}
            className="text-blue-500">+ Add Education</button>

          <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange}
            className="block w-full p-3 border rounded-lg"></textarea>

          {/* Experience Section */}
          <h3 className="text-xl font-semibold">Experience</h3>
          <input type="text" name="company" placeholder="Company" value={formData.experience.company}
            onChange={(e) => handleChange({ target: { name: "experience", value: { ...formData.experience, company: e.target.value } } })}
            className="block w-full p-3 border rounded-lg" />
          <input type="text" name="role" placeholder="Role" value={formData.experience.role}
            onChange={(e) => handleChange({ target: { name: "experience", value: { ...formData.experience, role: e.target.value } } })}
            className="block w-full p-3 border rounded-lg" />
          <input type="text" name="duration" placeholder="Duration" value={formData.experience.duration}
            onChange={(e) => handleChange({ target: { name: "experience", value: { ...formData.experience, duration: e.target.value } } })}
            className="block w-full p-3 border rounded-lg" />

          {/* Projects Section */}
          <h3 className="text-xl font-semibold">Projects</h3>
          {formData.projects.map((proj, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Project Title" value={proj.title}
                onChange={(e) => handleArrayChange(index, "title", e.target.value, "projects")}
                className="block w-full p-3 border rounded-lg" required />
              <textarea placeholder="Description" value={proj.description}
                onChange={(e) => handleArrayChange(index, "description", e.target.value, "projects")}
                className="block w-full p-3 border rounded-lg"></textarea>
            </div>
          ))}
          <button type="button" onClick={() => addField("projects", { title: "", description: "", tools: "" })}
            className="text-blue-500">+ Add Project</button>

          <button type="submit" className="w-full bg-violet-800 text-white p-3 rounded-lg hover:bg-violet-950 transition">
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
}
