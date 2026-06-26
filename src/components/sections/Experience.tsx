import { motion } from "framer-motion";
import { Globe } from "../ui/globe";
import zhanet from "@/assets/zhanet.png";
import ariopart from "@/assets/ariopart.png";
import hamiranboresh from "@/assets/hamiranBoresh.png";
import sepita from "@/assets/sepita.png";
import PopOverItem from "../ui/popoverItem";

export default function Experience() {
  const Experience = [
    {
      website: "wwww.zhanetclinic.com",
      title: "مرکز توانبخشی و گفتاردرمانی ژانت",
      img: zhanet,
      url: "https://www.zhanetclinic.com",
    },
    {
      website: "wwww.ariopart.com",
      title: "قطعات جلوبندی آریو پارت",
      img: ariopart,
      url: "https://www.ariopart.com",
    },
    {
      website: "www.hamiranboresh.com",
      title: "برشکاری فلزات حامیران برش",
      img: hamiranboresh,
      url: "https://www.hamiranboresh.com",
    },
    {
      website: "www.sepita.co",
      title: "لوازم مصرف پزشکی سپیتا",
      img: sepita,
      url: "https://sepita.co/",
    },
  ];

  return (
    <div
      id="portfolio"
      className="h-[50dvh] w-full relative flex items-center justify-center overflow-hidden "
    >
      <Globe className=" z-10 w-60 md:w-110" />
      <div className=" w-full relative bg-background/20 h-full max-w-300 overflow-hidden   ">
        {Experience.map((item, index) => {
          const angle = (index / Experience.length) * Math.PI * 2.4;
          const radius = 38 + index * -1.2;
          return (
            <motion.div
              style={{ top: "50%", left: "50%", translateX: "-50%" }}
              initial={{ opacity: 1 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                left: `${50 + Math.cos(angle) * radius}%`,
                top: `${50 + Math.sin(angle) * radius}%`,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.2,
                delay: 0.158 * index,
              }}
              className="absolute  z-0  rounded-full  ronded overflow-hidden flex flex-col justify-start   items-center  "
            >
              <PopOverItem
                website={item.website}
                url={item.url}
                title={item.title}
                img={item.img}
                alt={item.title}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
