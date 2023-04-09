import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";
const Navigationbar = () => {
  const [navigation, setNavigation] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (navigation && ref.current && !ref.current.contains(e.target)) {
        setNavigation(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navigation]);
  return (
    <div ref={ref}  className=" max-md:px-6  flex  fixed top-0 left-0 right-0 z-20 items-center h-10 text-white bg-[#171515] justify-between px-10">
     <Link to="/"> <div className="max-md:text-lg font-bold text-white font-serif text-xl flex items-center gap-2 cursor-pointer">
        Port<span className="text-red-500 font-serif">folio</span>
        <motion.div animate={{
          rotate:[0,0,360,360,0]

        }}
        transition={{
          duration:3
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg></motion.div>

      </div>

      </Link>

      <ul className={navigation ? "list-mobile" : "navigation"}>
        <a onClick={()=>setNavigation(false)} className="m-6 " href="#home">
          <li className="flex items-center gap-2 t">
            Home{" "}
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </li>
        </a>
        <a onClick={()=>setNavigation(false)} className="m-6 flex items-center" href="#about">
     <li className="flex items-center gap-2">
            About{" "}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </li>
          
        </a>
        <a onClick={()=>setNavigation(false)} className="m-6 flex items-center" href="#project">
          <li className="flex items-center gap-2 ">
            Projects
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
          </li>
        </a>
        <a onClick={()=>setNavigation(false)} className="m-6 flex items-center" href="#form">
          <li className="flex items-center gap-2 ">
            Contact{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </li>
      
          
        </a>
      </ul>

      {navigation ===false?(
        <div
          onClick={() => setNavigation(true)}
          className="hidden max-md:block  align-middle cursor-pointer"
        >
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      ) : (
        <motion.div
          animate={{
            rotate:[0,360,360,0]
          }}
          transition={{
            duration:2
          }}
          onClick={()=>setNavigation(false)}
          className="hidden max-md:block  align-middle cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default Navigationbar;
