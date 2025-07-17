import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: `Developed a fully responsive personal portfolio using React.js to showcase projects, skills, and contact details. Designed a modern UI with CSS and Bootstrap. Integrated a contact form and social links.`,
    tech: ["React.js", "CSS"],
    imgSrc:
      "https://devdoping.az/wp-content/uploads/2024/01/25-work-collection.jpg",
  },
  {
    title: "Food Delivery App (Frontend with Authentication)",
    description: `Designed a responsive food delivery web app using React.js with features like product listing, filtering, cart functionality, and navigation using React Router. Also designed login / signup using express and mongodb`,
    tech: ["React.js", "React Router", "Javascript", "Express.js", "Node.js", "MongoDB"],
    imgSrc:
      "https://uicookies.com/wp-content/uploads/2020/07/pizzon-food-website-template.png",
  },
];

function Projects() {
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4  my-20"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((proj, index) => (
            <div key={index} className="bg-orange-200 p-6 rounded-xl shadow-md">
              <div className="pb-5">
                <img className="h-64 w-full" src={proj.imgSrc} alt="" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000]">
                {proj.title}
              </h3>
              <p className="text-[#555555] mt-2">{proj.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#000000] text-sm  px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Projects;
