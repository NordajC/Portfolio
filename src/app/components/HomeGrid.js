import { useEffect, useState } from "react"
import { useTrail, animated, easings, useSpring } from "@react-spring/web"

import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Education from "./Education"
import Resume from "./Resume"
import Blog from "./Blog"
import Contact from "./Contact"
// import Misc from "./Misc"
import { GRIDS } from "../constants"
import { AnimatedCursor } from "./AnimatedCursor";

export default function HomeGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Jordan".split("")

  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "Aspiring Software Engineer".split("")

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1)
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1)
      }
    }, 100)

    return () => {
      clearInterval(id)
    }
  })

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  })

  

  return (
    <animated.div className='grid grid-cols-1 md:grid-cols-9 md:grid-rows-12 w-screen md:h-screen p-5 gap-5  m-0 md:overflow-hidden z-30 sm:overflow-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)'
      // style={{
      //   backgroundImage: "url('https://images.unsplash.com/photo-1707130869369-c00812966290?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center"
      // }}
    >
      {/* <animated.div 
      style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_100%_200px,#d5c5ff,transparent)]"
      ></animated.div> */}

      
    {/* <AnimatedCursor /> */}
      

      <animated.div
        style={animatedStyles}
        className='row-start-5 md:row-span-8 md:col-span-3 z-30'
      >
        <animated.div
          style={trails[1]}
          // className='relative bg-[#F4A261] border border-black h-full w-full rounded-lg z-40'
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          <WorkExperience />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-4 md:col-span-3 z-40'
      >
        <animated.div
          onClick={() => setCurrentGrid(GRIDS[1])}
          style={trails[3]}
          // className='relative h-full w-full bg-[#2A9D8F] border border-black rounded-lg'
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <Projects />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:col-span-3 md:row-span-4 z-40'
      >
        <animated.div
          style={trails[2]}
          // className='relative h-full w-full border border-neutral-900 bg-[#9ad1ea] rounded-lg'
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-50 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <Education />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='row-start-1 md:col-span-4 md:row-span-4 z-40'
      >
        <animated.div
          style={trails[0]}
          // className='h-full w-full p-10 bg-[#e9c46a] border border-black flex flex-col items-center justify-center gap-3 rounded-lg'
          className="h-full w-full p-10 gap-3 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1] m-auto"
        >
          <div className='border border-neutral-900 bg-[#333] rounded-lg w-fit px-5 py-3 m-auto mb-4'>
            <span className='text-5xl font-bold text-[#eee]' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-[#eee] animate-pulse'></span>
            </span>
          </div>
          <div className='border text-center border-neutral-900 bg-[#333] w-fit px-5 py-2 rounded-lg m-auto'>
            <span className='md:text-md text-[#eee]'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-[#eee] animate-pulse'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-8 md:col-span-2 z-40'
      >
        <animated.div
          style={trails[4]}
          // className='h-full w-full relative border border-neutral-900 bg-[#2A9D8F] rounded-lg'
                    className="h-full w-full p-10 bg-white/30 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <Blog />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-4 md:col-span-2 z-40'
      >
        <animated.div
          style={trails[5]}
          // className='h-full w-full relative border border-neutral-900 bg-[#2A9D8F] rounded-lg'
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <Resume />
        </animated.div>
      </animated.div>
      <animated.div
        style={{
            animatedStyles,
          postion : "relative",
        }}
        className='md:row-span-4 md:col-span-5 z-40'
      >
        <animated.div
          style={{
            ...trails[4],
            postion : "relative",
          }}
          // className='h-full w-full md:flex justify-between items-center p-10 gap-5 bg-[#94d1ee] border border-black rounded-lg'
          className="md:flex justify-between items-center p-10 gap-5 h-full w-full bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-gray-300/30 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <Contact />
        </animated.div>
      </animated.div>
      {/* <animated.div
        style={animatedStyles}
        className='md:row-span-3 md:col-span-2'
      > */}
        {/* <animated.div
          style={trails[6]}
          className='h-full w-full relative border border-neutral-900 bg-[#F4A261]'
        >
          <Misc />
        </animated.div> */}
      {/* </animated.div> */}
      
    </animated.div>
  )
}
