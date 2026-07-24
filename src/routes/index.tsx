import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ahmadrezaNikzad from "@/assets/new-comp/AhmadrezaNikzad.png";
import { MarqueeSection } from "@/components/ui/marqueeSection";
import Experience from "@/components/sections/Experience";
import Skill from "@/components/sections/skill";
import ScrambleInSection from "@/components/ui/scrambleInSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});
function HomePage() {

  return (
    <>
      {/* ==== START : HERO Section ==== */}
      <div className="about relative  flex  justify-end items-center flex-col h-screen  overflow-hidden ">
        <div className=" mx-auto w-full h-full max-w-300 flex flex-col md:flex-row  overflow-hidden  ">
          {/* ---START  : Description */}
          <div className=" flex-1 flex flex-col justify-end items-start gap-0 h-full w-full px-8 md:px-4">
            <div>
              <motion.h1
                className="text-2xl md:text-5xl font-bold text-nowrap whitespace-nowrap "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                احمدرضا نیکزاد
              </motion.h1>
              <hr className="w-[78%] mt-2 border" />
              <TypeAnimation
                className="font-light p-0 text-nowrap"
                sequence={[
                  "برنامه نویس فرانت اند • طراح و توسعه دهنده وبسایت • کارشناس سئو",
                ]}
                speed={80}
                cursor={true}
              />
            </div>
            <div></div>
          </div>
          {/* ---END  : Description */}
          {/* ---START  : Image */}
          <div className=" flex-1  flex items-end justify-center md:justify-end">
            <div className="h-full ">
              <img
                className="pointer-events-none select-none w-75   md:w-full md:h-full  "
                onDrag={(e) => e.preventDefault()}
                draggable="false"
                loading="eager"
                fetchPriority="high"
                src={ahmadrezaNikzad}
                alt="ahmadrezaNikzad"
              />
            </div>
          </div>
          {/* ---END  : Image */}
        </div>
        {/* ---START : Marquee ---- */}

        <div
          className="  md:h-25 flex items-center  shadow-xl shadow-accent justify-center w-full "
          dir="ltr"
        >
          <MarqueeSection />
        </div>
        {/* ---END : Marquee ---- */}
      </div>
      {/* ==== END : HERO Section ====  */}
      {/* ==== START : Summary Section ==== */}
      <div id="summary" className="summary relative  flex  justify-center items-center flex-col overflow-hidden ">
        <div className=" mx-auto w-full max-w-300 h-dvh flex flex-col justify-center ">
      <ScrambleInSection />

      </div>
      </div>

      {/* ==== END : Summary Section ==== */}
      {/* ====START : SKILL Section ==== */}
      <Skill />
      {/* ====END : SKILL Section ==== */}

      {/* ====START : Experience Section ==== */}
      <Experience />
      {/* ====END : Experience Section ==== */}

    </>
  );
}
