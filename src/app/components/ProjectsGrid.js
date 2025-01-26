import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";
import Image from "next/image";
import acument from "../assets/acument.gif";
import nextrip from "../assets/NexTrip.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few projects I've worked on over the years".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200/10">
      <animated.div
        style={animatedStyles}
        className="row-start-4 lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full relative h-full w-full p-8 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <div className="w-full flex place-content-between align-items">
            <h1 className="text-3xl p-0 sm:w-lg">3D Action Survival Game</h1>
            <a
              href="https://github.com/NordajC/MPGD-project-prototype"
              className={`w-10 h-10 border rounded-lg bg-[#333] flex items-center justify-center text-xl sm:w-10`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="text-[#fff] h-10" />
            </a>
          </div>

          <div class="text-base text-slate-600 lg:max-w-xs pt-2 leading-6 flex flex-row flex-wrap gap-2 w-full">
            <span class="tag">C#</span>
            <span class="tag">Unity</span>
            <span class="tag">Blender</span>
          </div>

          <p className="text-[#777777] pt-2">
            This web app uses the Web Audio API to generate realistic ambulance
            and police siren sounds with spatial audio, simulating movement from
            different directions. Users can control the siren and its visual
            representation on a canvas in real-time using the arrow keys.
          </p>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full relative h-full w-full p-8 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <h1 className="text-3xl p-2">Acument Website</h1>
          <Image
            src={acument}
            alt="Acument Website"
            layout="cover"
            objectFit="contain"
            className="border border-grey-400/60 rounded-lg"
            unoptimized
          />

          <div class="text-base text-slate-600 lg:max-w-xs pt-2 leading-6 flex flex-row flex-wrap gap-2 w-full">
            <span class="tag">HTMX</span>
            <span class="tag">SCSS</span>
            <span class="tag">Jotform</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Strapi</span>
          </div>

          <p className="text-[#777777] pt-2">
            Redesigned and coded the Acument group company website with
            intergrated job posting feature and general content management
            features using StrapAPI. Also developed a resuable UI library using
            SCSS.
          </p>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1] flex flex-col items-center justify-center gap-3"
        >
          <div className="border border-neutral-900 bg-[#333] w-fit px-5 py-3 rounded-lg">
            <span className="text-5xl font-bold text-[#fff]" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-[#eee] animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-[#333] w-fit px-5 py-2 rounded-lg">
            <span className="lg:text-md text-[#fff]">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-[#eee] animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-6 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className="h-full w-full p-8 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        >
          <div className="w-full flex place-content-between align-items">
            <h1 className="text-3xl p-2 sm:w-lg">
              NexTrip Travel Itinerary App
            </h1>
            <a
              href="https://github.com/NordajC/travelapptest"
              className={`w-10 h-10 border rounded-lg bg-[#333] flex items-center justify-center text-xl mt-2 sm:w-10`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="text-[#fff] h-10" />
            </a>
          </div>
          <Image
            src={nextrip}
            alt="NexTrip"
            // layout="cover"
            // objectFit="cover"
            className="border border-grey-400/60 rounded-lg w-80 m-auto"
            unoptimized
          />

          <div class="text-base text-slate-600 pt-2 leading-6 flex flex-row flex-wrap gap-2 w-full">
            <span class="tag">Dart</span>
            <span class="tag">Flutter</span>
            <span class="tag">Firestore</span>
            <span class="tag">Firebase Auth</span>
            <span class="tag">Realtime Database</span>
          </div>

          <p className="text-[#777777] pt-2">
            Redesigned and coded the Acument group company website with
            intergrated job posting feature and general content management
            features using StrapAPI. Also developed a resuable UI library using
            SCSS.
          </p>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[5]}
          className="h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        ></animated.div>
      </animated.div>

      {/* <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className="lg:flex justify-between items-center p-10 gap-5 h-full w-full p-10 bg-white/20 backdrop-blur-[6px] backdrop-saturate-180 border border-grey-400/60 rounded-lg z-40 shadow-none transition-shadow duration-300 hover:shadow-[0_0_20px_10px_rgba(139,163,225,0.7),_inset_0_0_10px_4px_rgba(139,163,225,0.3)] hover:border-[#8BA3E1]"
        ></animated.div>
      </animated.div> */}
    </animated.div>
  );
}
