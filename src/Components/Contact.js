import React, { useState } from "react";
import screenshot from "./ss.png";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import pdf from "./cv-io.pdf";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrgansation] = useState("");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="form" className="mt-[50px] ">
      <h2 className="font-semibold text-2xl">Reach out to me</h2>
      <div className=" max-md:grid-cols-1 gap-10 grid grid-cols-2  mt-[40px]">
        <motion.form
          action="https://getform.io/f/5ac02887-3188-41de-8f0e-a7b168b73f7f"
          method="POST"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col gap-4 border-[2px] p-4 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="outline-none rounded-md pl-2 h-[40px] text-black"
            placeholder="Chandra Bhandari"
          />
          <input
            type="email"
            name="email"
            className="outline-none pl-2 rounded-md h-[40px] text-black"
            placeholder="rollinrabin@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="organisation"
            className="outline-none pl-2 rounded-md h-[40px] text-black"
            placeholder="Chesterlee organisation"
            onChange={(e) => setOrgansation(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 h-[40px]"
          >
            Submit{" "}
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[14px] text-slate-300">
              Please submit form after filling all input value{" "}
            </span>
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
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center  justify-center  "
        >
          <a
            onClick={handleDownload}
            className="flex items-center justify-center flex-col gap-4  p-2 border-[2px] rounded-lg"
          >
            <img className="h-[200px] rounded-lg" src={screenshot} />
            <button className="bg-red-500 text-white p-2 inline-flex rounded-lg">
              Download cv
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
