import React from "react";

export default function Skills() {
  const skills = [
    { name: "Graphic Desgning", level: "Advance"},
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
  ];

  return (
    <section className="bg-pink-50 py-48 px-4 md:px-20 min-h-screen">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-8 animate-pulse font-serif animate-fadeIn">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-xl shadow-pink-300 hover:shadow-pink-800 transform transition-transform duration-500 ease-in-out hover:scale-110"
            >
              <h3 className="text-xl font-semibold font-serif text-pink-800">{skill.name}</h3>
              <p className="text-pink-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}