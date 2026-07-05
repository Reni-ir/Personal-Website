import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Dock from "@/components/Dock";
import {motion , useScroll, useTransform} from "framer-motion"

export const QuickNav = () =>{
  const {scrollY} = useScroll();
  const rightValue = useTransform(scrollY , [0 , 100] , [-100 , 0]);
    const items = [
   
      {
        icon: <Code2 size={18} />,
        label: "درباره",
        onClick: () => document.getElementById("summary")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: <BriefcaseBusiness size={18} />,
        label: "نمونه کارها ",
        onClick: () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        icon: <Mail size={18} />,
        label: "ارتباط با من ",
        onClick: () => window.location.href = "/contactme",
      },
    ];
    return (
      <motion.div
      style={{right  : rightValue}}
      className="fixed bottom-0 w-full z-30 md:hidden   ">
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </motion.div>
    );
}