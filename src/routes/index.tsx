import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ahmadrezaNikzad from "@/assets/ahmadrezaNikzad.webp";
import { MarqueeSection } from "@/components/ui/marqueeSection";
import ElasticLine from "@/components/fancy/physics/elastic-line";
import Experience from "@/components/sections/Experience";
import Skill from "@/components/sections/skill";

export const Route = createFileRoute("/")({
  component: HomePage,
});
function HomePage() {

  return (
    <>
      {/* ==== START : HERO Section ==== */}
      <div className="about  relative  flex justify-end items-center flex-col h-dvh  overflow-hidden ">
        <div className=" mx-auto w-full max-w-300  flex flex-col md:flex-row items-center justify-start overflow-hidden   ">
          {/* ---START  : Description */}
          <div className="flex-1 flex flex-col justify-center items-start gap-0 h-full w-full px-8 md:px-4s     ">
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
                "برنامه نویس فرانت اند ، طراح و توسعه دهنده وبسایت ، کارشناس سئو",
              ]}
              speed={80}
              cursor={true}
            />
          </div>
          {/* ---END  : Description */}
          {/* ---START  : Image */}
          <div className=" flex flex-2 relative  ">
            <div className="flex items-end ">
              <img
                src={ahmadrezaNikzad}
                height={"100%"}
                width={"100%"}
                alt="ahmadrezaNikzad"
              />
            </div>
          </div>
          {/* ---END  : Image */}
        </div>
        {/* ---START : LogoLoop ---- */}
        <div className="overflow-hidden w-full max-w-400 h-24 ">
          <MarqueeSection />
        </div>
        {/* ---END : LogoLoop ---- */}
      </div>
      {/* ==== END : HERO Section ====  */}
      {/* ====START : SKILL Section ==== */}
       <Skill />
      {/* ====END : SKILL Section ==== */}

      {/* ====START : Experience Section ==== */}
      <Experience />
      {/* ====END : Experience Section ==== */}

      {/* ====START : Footer Section ==== */}
      <div className="relative">
        <ElasticLine
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
