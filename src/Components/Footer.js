import React from "react";

const Footer = () => {
  return (
    <div className="pt-[50px] px-10 h-auto max-md:px-6 relative bottom-0  bg-[#171515] text-white pb-[20px] ">
      <div className="max-sm:gap-4 max-md:grid-cols-2 grid grid-cols-3 gap-6 max-md:gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg max-sm:text-[1.2rem]">
            Contacts
          </h1>
          <a
            className="flex items-center gap-2 max-sm:text-[12px]"
            href="tel:9823047073"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 max-sm:w-4 max-sm:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>+97798230470743</span>
          </a>
          <a
            className="flex items-center max-sm:text-[12px] gap-2"
            href="mailto:rollinrabin@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 max-sm:w-4 max-sm:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>rollinrabin@gmail.com</span>
          </a>
          <a className="flex items-center max-sm:text-[12px] gap-2" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 max-sm:w-4 max-sm:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <span>9823047073</span>
          </a>
          <a href="https://www.google.com/maps/place/Kalanki,+Kathmandu" className="flex items-center max-sm:text-[12px] gap-2 underline" >
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span>Kalanki, Kathmandu</span>
          </a>
        </div>
        <div className="flex flex-col max-sm:text-[12px]  gap-4">
          <h1 className="font-semibold text-lg max-sm:text-[1.2rem]">
            Social media
          </h1>
          <a
            className="flex gap-2"
            href="https://www.facebook.com/rabin.bhn.20"
          >
            <img
              className="w-[24px] max-sm:w-[20px] object-contain"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            />
            <span>Rabin Bhandari</span>
          </a>
          <a
            className="flex gap-2"
            href="https://github.com/RabiCB?tab=repositories"
          >
            <img
              className="w-[24px] max-sm:w-[20px]  object-contain"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <span>RabiCB</span>
          </a>
          <a className="flex gap-2" href="https://www.linkedin.com/in/chandra-bhandari-386b69240">
            <img
              className="w-[24px] object-contain max-sm:w-[20px] "
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            />
            <span>Chandra Bhandari</span>
          </a>
        </div>
        <form className="flex  flex-col gap-4  ">
          <h1 className="font-semibold text-lg max-sm:text-[1.2rem]">
            Send me message
          </h1>
          <input
            type="text"
            className="h-[40px] rounded-lg pl-2 outline-none text-black"
            placeholder="type something"
          />
          <button className="bg-blue-500 text-white rounded-lg p-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
