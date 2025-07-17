import React from "react";

import profile from "../../public/Pro_file.jpg";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl text-black">Welcome !</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="bg-black">Hello, I'm  </h1>
              
              <ReactTyped
                className="text-[#f48c47] font-bold"
                strings={["Ashutosh Singh"]}
                typeSpeed={65}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-xl mt-2 bg-blue-500 w-fit">
              Web Developer | React Enthusiast | Problem Solver
            </p>
            <br />
            <p className="text-sm md:text-lg text-justify text-[#f3744d] ">
              A passionate Web Developer and Computer Science student with a
              strong foundation in Java, JavaScript, and React.js. I specialize
              in building modern, responsive web applications with clean UI and
              intuitive user experience.
            </p>
            <br />
            
            <div className="flex flex-col items-center md:flex-row justify-end space-y-6 md:space-y-0 text-neutral-500">
              
              <div className="  space-y-2 px-10">
                <h1 className="font-bold text-center">Connect & Explore</h1>
                <ul className="flex space-x-5 px-5 ">
                  <li className="hover:text-black">
                    <a
                      href="https://www.linkedin.com/in/ashutosh-singh-538713258/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li >
                  <li className="hover:text-black">
                    <a href="https://github.com/technoidAS" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li className="hover:text-black">
                    <a href="https://leetcode.com/u/straybeast_001/" target="_blank">
                      <SiLeetcode className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={profile}
              className="rounded-full md:w-[400px] md:h-[400px] w-60 h-60 border border-gray-300 shadow-md shadow-amber-400 transition duration-300 hover:shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
