import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Dock from "@/components/Dock";
import {motion , useScroll, useTransform} from "framer-motion"

export const QuickNav = () =>{
  const {scrollY} = useScroll();
  const rightValue = useTransform(scrollY , [0 , 4] , [-104 , 0]);
    const items = [
      {
        icon: <Code2 size={18} />,
        label: "درباره",
        onClick: () => (window.location.href = "/#summary"),
      },
      {
        icon: <BriefcaseBusiness size={18} />,
        label: "نمونه کارها ",
        onClick: () => (window.location.href = "/#portfolio"),
      },
      {
        icon: <Mail size={18} />,
        label: "ارتباط با من ",
        onClick: () => (window.location.href = "/contactme"),
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