
import React from "react";
import { allprojects } from "./Projectsdata";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div id="project" className="mt-[50px]">
      <h2 className="font-semibold  max-md:text-lg text-2xl ">Projects</h2>
      <div className="grid grid-cols-4 mt-6 h-[360px] max-lg:h-[400px] max-md:h-[500px] max-sm:h-[680px] max-md:grid-cols-3 max-sm:grid-cols-2 gap-8 max-md:gap-4">
        {allprojects.map((projectsg) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={projectsg.id}
              className="border-[2px] relative rounded-lg p-2 flex flex-col gap-4"
            >
              <h1>{projectsg.name}</h1>
              {projectsg.hostedurl ? (
                <a
                  className="bg-blue-500 text-sm flex gap-2 items-center text-white rounded-md p-[4px] w-[100px] "
                  href={projectsg.hostedurl}
                >
                  Visit site{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </a>
              ) : (
                <div className="flex gap-2 items-center">
                  not hosted yet{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </div>
              )}
              <a
                className="bg-purple-500 text-sm absolute left-2 bottom-2 flex gap-2 items-center text-white rounded-md p-[4px] w-[130px] "
                href={projectsg.code}
              >
                Gitude repo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
