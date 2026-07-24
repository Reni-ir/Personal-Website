import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { SpinningText } from "../ui/spinning-text";
export const Header = () => {
  const menuItem = [
    { name: "درباره ", url: "/#summary" },
    { name: "نمونه کارها ", url: "/#portfolio" },
    { name: "ارتباط با من ", url: "/contactme" },
  ];

  return (
    <header className="min-w-full flex fixed h-16 md:h-20 top-0 z-50 ">
      <div
        onClick={() => (window.location.href = "/")}
        className="flex flex-1 relative  justify-center items-center cursor-pointer  "
      >
        <SpinningText className="text-[9px]  w-15 h-15" radius={5}>
          Ahmad • Reza • Nikzad •
        </SpinningText>
      </div>
      <motion.div
        initial={{ translateY: -120, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          ease: "easeInOut",
        }}
        className="navbar  flex-3 hidden md:flex items-center justify-center gap-2  "
      >
        <div className="navbar-item flex justify-center items-center gap-5 text-xl font-extralight w-137.5 bg-background/40  h-11.25 rounded-lg group bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 border shadow ">
          {menuItem.map((item) => {
            return (
              <Link
                key={item.url}
                to={item.url}
                className="transition-opacity group-hover:opacity-40 hover:opacity-100"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          to={"/"}
          className=" h-11.25 w-11.25 flex items-center justify-center rounded-full cursor-pointer bg-primary border-border shadow-2xl shadow-accent"
        >
          <HomeIcon className="text-surface" size={24} />
        </Link>
      </motion.div>

      <div className="flex flex-1 justify-center items-center ">
        {/* <button className="flex items-center justify-center cursor-pointer">
          تغییر رنگ صفحه
        </button> */}
      </div>
    </header>
  );
};
