import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Preview() {
  const [resumeData, setResumeData] = useState(null);
  const resumeRef = useRef();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("resumeData"));
    if (!data) return;
    
    data.education = Array.isArray(data.education) ? data.education : [];
    data.projects = Array.isArray(data.projects) ? data.projects : [];
    
    setResumeData(data);
  }, []);

  const handlePrint = useReactToPrint({
    documentTitle: 'Title',
    contentRef: resumeRef,
  });

  if (!resumeData) return <p className="text-center mt-10">No Resume Data Found.</p>;

  return (
    <div ref={resumeRef} className="max-w-2xl mx-auto p-8 bg-white shadow-lg m-5 border rounded-lg">
      {/* Header Section */}
      
      <h1 className="text-3xl font-bold ">{resumeData.name}</h1>
      
      <hr className="border-t-2 border-gray-300 my-4"/>

      <p className=" text-gray-600">{resumeData.phone} | {resumeData.email}</p>
      
      <p className=" text-blue-500 transition">
        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 cursor-pointer">
          LinkedIn
        </a> 
        | 
        <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 cursor-pointer">
          GitHub
        </a>
      </p>

      {/* Objective Section */}
      <h2 className="text-xl font-semibold mt-6">Objective</h2>
      <hr className="border-t-2 border-gray-300 my-4"/>
      <p className="text-gray-700">{resumeData.objective || "Not Provided"}</p>

      {/* Education Section */}
      <h2 className="text-xl font-semibold mt-6">Education</h2>
      <hr className="border-t-2 border-gray-300 my-4"/>
      {resumeData.education.length > 0 ? (
        <ul className="list-disc ml-6 text-gray-700">
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.institution}</strong> - {edu.degree} ({edu.percentage})
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No education details provided.</p>
      )}

      {/* Skills Section */}
      <h2 className="text-xl font-semibold mt-6">Skills</h2>
      <hr className="border-t-2 border-gray-300 my-4"/>
      <p className="text-gray-700">{resumeData.skills || "Not Provided"}</p>

      {/* Experience Section */}
      <h2 className="text-xl font-semibold mt-6">Experience</h2>
      <hr className="border-t-2 border-gray-300 my-4"/>
      {resumeData.experience ? (
        <>
          <p className="text-gray-700"><strong>{resumeData.experience.company}</strong> ({resumeData.experience.duration})</p>
          <p className="text-gray-600">{resumeData.experience.role}</p>
        </>
      ) : (
        <p className="text-gray-500">No experience details provided.</p>
      )}

      {/* Projects Section */}
      <h2 className="text-xl font-semibold mt-6">Projects</h2>
      <hr className="border-t-2 border-gray-300 my-4"/>
      {resumeData.projects.length > 0 ? (
        resumeData.projects.map((project, index) => (
          <div key={index} className="mt-2">
            <p className="text-gray-700"><strong>{project.title}</strong></p>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-500">Tools used: {project.tools}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No projects listed.</p>
      )}

      <div className="flex justify-center">
        <button onClick={handlePrint} className="bg-violet-800 text-white p-3 rounded-lg hover:bg-violet-950 transition mt-8">
        Download as PDF
        </button>
      </div>

    </div>
  );
}
