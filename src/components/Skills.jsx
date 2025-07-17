import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Node", icon: <FaNodeJs className="text-green-600" /> },
];

function Skills() {
  return (
   <>
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 my-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-500">Tech Stack / Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-black ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-[#ffffff] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 hover:bg-black hover:text-white"
          >
            <div className="text-4xl p-2 rounded-2xl bg-white">{skill.icon}</div>
            <p className="text-lg font-medium ">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    <hr/>
   </>
  );
}

export default Skills;
