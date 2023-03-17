import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Intervalform = ({
  message,
  setInput,
  input,
  setSendmessage,
  setEmail,
  Email,
}) => {
  
 

  




  return (
    <>
      <div className=" flex items-center bg-opacity-80 justify-center rounded-lg bg-[#171515] z-10 absolute top-0 left-0 bottom-0 right-0 flex-col gap-4 ">
        <div className="font-semibold text-yellow-300 flex items-center gap-2">
          {" "}
          Any questions and queries{" "}
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
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          oaction="https://getform.io/f/5ac02887-3188-41de-8f0e-a7b168b73f7f"
          method="POST"
          className="flex flex-col w-[400px] max-sm:w-[340px] gap-4 border-[2px] p-4 rounded-lg shadow opacity-100"
        >
          <input
            type="text"
            name="question"
            className="outline-none rounded-md pl-2 h-[40px] text-black"
            placeholder="what are your main skills ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="outline-none pl-2 rounded-md h-[40px] text-black"
            placeholder="rollinrabin@gmail.com"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
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
           <span className="text-[14px] text-slate-300 max-sm:text-[12px]">Please submit form after filling all input value{" "}</span> 
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
        <svg
          onClick={() => setSendmessage(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6 absolute top-8 right-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
};

export default Intervalform;
