import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ahmadrezaNikzad from "@/assets/new-comp/AhmadrezaNikzad.webp";
import { MarqueeSection } from "@/components/ui/marqueeSection";
import ElasticLine from "@/components/fancy/physics/elastic-line";
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
      <div className="about relative  flex  justify-end items-center flex-col h-dvh  overflow-hidden ">
        <div className=" mx-auto w-full max-w-300  flex flex-col md:flex-row items-end justify-start overflow-hidden ">
          {/* ---START  : Description */}
          <div className="flex-1 flex flex-col justify-center items-start gap-0 h-full w-full px-8 md:px-4">
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
          <div className=" flex flex-2 relative">
            <div className="flex items-end ">
              <img
                className="pointer-events-none select-none"
                onDrag={(e) => e.preventDefault()}
                draggable="false"
                src={ahmadrezaNikzad}
                height={"100%"}
                width={"100%"}
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
      <div id="summary" className="summary relative  flex  justify-center items-center flex-col h-[90dvh]  overflow-hidden ">
        <div className=" mx-auto w-full max-w-300 h-[80dvh] flex flex-col justify-center p-4 ">
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

      {/* ====START : Footer Section ==== */}
      <div className="relative ">
        <ElasticLine
          className="h-20! z-50"
          releaseThreshold={150}
          strokeWidth={1}
          animateInTransition={{
            type: "spring",
            stiffness: 50,
            damping: 5,
            delay: 0.15,
          }}
        />
      </div>
      {/* ====END : Footer Section ==== */}
    </>
  );
}
