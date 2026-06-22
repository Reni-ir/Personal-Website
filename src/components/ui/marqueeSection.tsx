import { Marquee } from "./marquee";
import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
const reviews = [
  {
    name: "HTML",
    img: "https://cdn.simpleicons.org/html5/000000",
  },
  {
    name: "CSS",
    img: "https://cdn.simpleicons.org/css/000000",
  },
  {
    name: "JavaScript",
    img: "https://cdn.simpleicons.org/javascript/000000",
  },
  {
    name: "TypeScript",
    img: "https://cdn.simpleicons.org/typescript/000000",
  },
  {
    name: "React",
    img: "https://cdn.simpleicons.org/react/000000",
  },
  {
    name: "Next.js",
    img: "https://cdn.simpleicons.org/nextdotjs/000000",
  },
  {
    name: "NestJS",
    img: "https://cdn.simpleicons.org/nestjs/000000",
  },
  {
    name: ".NET Core",
    img: "https://cdn.simpleicons.org/dotnet/000000",
  },
  {
    name: "C#",
    img: "https://cdn.simpleicons.org/tailwindcss/000000",
  },
  {
    name: "PHP",
    img: "https://cdn.simpleicons.org/php/000000",
  },
];
export function MarqueeSection() {
    const [logoHeight , setLogoHeight] = useState<number>(50);
    useEffect(()=>{
        const handleResize = () =>{
            const width = window.innerWidth;
            if (width < 890 ) {
                setLogoHeight (50);
            }else setLogoHeight (80);

        }
        handleResize();
        window.addEventListener("resize" , handleResize)
        return () => window.removeEventListener("resize" , handleResize);
    } , [])
  return (
    <div className="relative flex w-full  flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:40s] ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.img}
            name={review.name}
            height={logoHeight}
            img={review.img}
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
