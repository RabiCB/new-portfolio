import React from 'react'

const Socialmedia = () => {
  return (
    <div className="border-none max-sm:right-2 p-2 h-[180px] max-sm:w-[54px] w-[80px] fixed z-10 right-4 flex flex-col gap-4 bottom-[8px]">
        <a href="https://github.com/RabiCB?tab=repositories">
          <img
            className="w-[30px] object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </a>
        <a href="https://www.facebook.com/rabin.bhn.20">
          <img
            className="w-[30px] object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          />
        </a>
        <a href="https://www.instagram.com/iam.rabin">
          <img
            className="w-[30px] object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          />
        </a>
        <a href="https://www.linkedin.com/in/chandra-bhandari-386b69240">
          <img
            className="w-[30px] object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          />
        </a>
      </div>
  )
}

export default Socialmedia