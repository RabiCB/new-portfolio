import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Intervalform from "./Intervalform";
import Socialmedia from "./Socialmedia";
const Home = () => {
  const [message, setSendmessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSendmessage(true);
    }, 1000);
  }, []);

  const [input, setInput] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <div className="h-auto pb-[20px] relative text-white bg-[#171515]  max-md:px-6 px-10">
      <div
        id="home"
        className="max-md:h-auto max-md:grid-cols-1 h-[540px] relative pb-[10px] grid grid-cols-2 gap-8   text-white "
      >
        <div className="flex flex-col max-md:pt-[120px] pt-[180px] gap-4">
          <h1 className="font-bold text-2xl">Hello!</h1>
          <h2 className="font-bold text-lg ">Iam Chandra Bhandari (Rabi)</h2>
          <p className="text-[14px]">
            Iam a Frontend Developer with Knowledge of UI/UX designing and
            Quality assurance
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="#project"
              className="p-2 cur border-none bg-red-500  rounded-lg text-white"
            >
              view work
            </a>
            <a
              href="#form"
              className="p-2 border-none bg-red-500  rounded-lg text-white"
            >
              Contact me
            </a>
          </div>
         
        </div>
        <div className=" flex items-center justify-center pt-[10px]">
          <img
            className="h-full rounded-lg w-full object-cover aspect-video "
            src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?w=740&t=st=1678874874~exp=1678875474~hmac=b5163f61f35cdb6266ec75a4a95ce443d2337732dc03ce026ded5cee647e44f6"
          />
        </div>
        {message && (
          <Intervalform
            input={input}
            Email={Email}
            setInput={setInput}
            setSendmessage={setSendmessage}
            setEmail={setEmail}
          />
        )}
      </div>

      <div>
        <Socialmedia />
      </div>

      <About />

      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
