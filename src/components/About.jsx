import React from "react";

function About() {
  return (
    <>
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4  my-20 text-black"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6 text-blue-500">About Me</h2>

        <p className=" text-lg leading-relaxed ">
          Hey! I'm <strong className="text-red-500">Ashutosh Singh</strong>, a 
          passionate about building modern, user-friendly web applications that
          combine solid logic with elegant design.
        </p>

        <p className="text-lg leading-relaxed mt-4 ">
          I enjoy diving into React.js and java, and I’m always exploring new
          tools and frameworks to level up my development game. Whether it’s
          optimizing performance, or solving algorithmic
          challenges, I’m always up for the challenge.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          When I'm not coding, you’ll find me sharpening my DSA skills on
          LeetCode or planning my next side project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
          >
            📄 View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-singh-538713258/"
            target="_blank"
            className="bg-black hover:bg-orange-300 text-white font-medium py-2 px-6 rounded transition"
          >
            🤝 Let's Connect
          </a>
        </div>
      </div>
      
    </div>
    {/* <hr/> */}
    </>
    
  );
}

export default About;
