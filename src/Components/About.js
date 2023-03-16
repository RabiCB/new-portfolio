import React from "react";
import { useParams, Link } from "react-router-dom";
import { skills } from "./Skillsdata";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className="mt-[50px]">
      <div className="flex flex-col gap-10 ">
        <h2 className="headline font-semibold  max-md:text-lg text-2xl ">
          About Me and Skills
        </h2>
        <p>
          I'm a Web Developer with Knowledge of UI/UX and QA based in Kathmandu,
          Nepal . I also have major skills on Photo editing,Photography,Figma
          and Social Media handling
        </p>
        <div className="grid gap-4 grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
          {skills.map((resumeskills) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="rounded-lg text-white  border-[2px] shadow flex flex-col gap-2 p-2"
                key={resumeskills.id}
              >
                <h2 className="font-semibold">{resumeskills.name}</h2>
                <p>{resumeskills.allskills}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
