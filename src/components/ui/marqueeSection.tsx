import { useEffect, useState } from "react";
import {
  SiCplusplus,
  SiCss,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { InfiniteSlider } from "./infinite-slider";
const reviews = [
  {
    label: "HTML",
    color: "#111111",
    icon: SiHtml5,
  },
  {
    label: "CSS",
    color: "#111111",
    icon: SiCss,
  },
  {
    label: "JavaScript",
    color: "#111111",
    icon: SiJavascript,
  },
  {
    label: "TypeScript",
    color: "#111111",
    icon: SiTypescript,
  },
  {
    label: "React",
    color: "#111111",
    icon: SiReact,
  },
  {
    label: "Next.js",
    color: "#111111",
    icon: SiNextdotjs,
  },
  {
    label: "NestJS",
    color: "#111111",
    icon: SiNestjs,
  },
  {
    label: ".NET Core",
    color: "#111111",
    icon: SiDotnet,
  },
  {
    name: "C#",
    color: "#111111",
    icon: SiCplusplus,
  },
  {
    name: "PHP",
    color: "#111111",
    icon: SiPhp,
  },
];
export function MarqueeSection() {
  const [logoHeight, setLogoHeight] = useState<number>(50);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 890) {
        setLogoHeight(50);
      } else setLogoHeight(80);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="w-full max-w-324 relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <InfiniteSlider gap={34} speed={50} reverse>
          {reviews.map((item, index) => {
            const Logo = item.icon;
            return (
              <div key={index}>
                <Logo size={logoHeight} />
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </>

    // </div>
  );
}
