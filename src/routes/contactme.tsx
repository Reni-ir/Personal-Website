import { createFileRoute } from "@tanstack/react-router";
import { LucideArrowUpRight } from "lucide-react";
import { easeIn, motion } from "framer-motion";
import Shuffle from "@/components/ui/Shuffle";
export const Route = createFileRoute("/contactme")({
  component: RouteComponent,
});
function RouteComponent() {
  return (
    <>
      <div className=" mx-auto w-full max-w-300 flex flex-col md:flex-row items-center justify-center md:justify-start overflow-hidden h-[90vh]  gap-24 md:gap-0 ">
        <div className="w-full  flex flex-col gap-8 items-center justify-center md:gap-12 overflow-hidden">
          <motion.span
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              ease: easeIn,
              delay: 0.2,
            }}
            className="font-[AnjomanHeavy] text-5xl md:text-8xl flex"
          >
            این سمتِ
          </motion.span>
          <div className="flex gap-12 ">
            <motion.span
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                type: "spring",
                ease: easeIn,
                delay: 0.3,
              }}
              className="font-[AnjomanHeavy] text-5xl md:text-8xl flex"
            >
              ماجرا{" "}
            </motion.span>
            <motion.span
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                type: "spring",
                ease: easeIn,
                delay: 0.6,
              }}
              className="font-[AnjomanHeavy] text-5xl md:text-8xl flex"
            >
              مَنم{" "}
            </motion.span>
          </div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              ease: easeIn,
              delay: 1,
            }}
            dir="ltr"
            className="text-5xl md:text-8xl flex"
          >
            <Shuffle
            className="font-mono lowercase!"
              text="say hi :)"
              shuffleDirection="left"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </motion.div>
        </div>
        <div className="  w-full flex flex-col gap-4 justify-center items-center ">
          <a
            href="mailto:nikzad.ahmadreza@yahoo.com"
            className="flex justify-center  w-full text-xl md:text-2xl"
          >
            nikzad.ahmadreza@yahoo.com
          </a>
          <hr className="w-[40%]" />
          <div className="flex gap-4 ">
            <a
              href="https://www.instagram.com/nikzadahmadreza_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row-reverse justify-center gap-2.5 text-[--text-secondary] text-xs opacity-70"
            >
              INSTAGRAM
              <LucideArrowUpRight size={14} />
            </a>
            <a
              href="https://wa.me/989197976775"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row-reverse justify-center gap-2.5 text-[--text-secondary] text-xs opacity-70"
            >
              WHATSAPP
              <LucideArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
