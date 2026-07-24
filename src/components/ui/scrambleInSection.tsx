import { useEffect, useRef } from "react";

import ScrambleIn, {} from "@/components/fancy/text/scramble-in";
import type { ScrambleInHandle } from "@/components/fancy/text/scramble-in";

export default function ScrambleInSection() {
  const titles = [
    "بیش از ۶ سال تجربه در توسعه وب",
    "اجرای موفق بیش از ۲۰ پروژه واقعی برای کسب‌وکارهای مختلف",
    "تسلط بر طراحی و توسعه انواع وب‌سایت با WordPress",
    "تجربه کامل در SEO تکنیکال و On-Page",
    "تسلط بر HTML، CSS، Bootstrap، JavaScript، React و Tailwindcss",
    "توانایی تبدیل طراحی UI به رابط کاربری Responsive و بهینه",
    "آشنا با فرآیند کامل SEO از تحقیق کلمات کلیدی تا تحلیل داده",
    "توسعه افزونه و شخصی‌سازی WordPress",
    "حل مسائل پیچیده با استفاده از Prompt Engineering و هوش مصنوعی",
    "استفاده استراتژیک از هوش مصنوعی برای افزایش سرعت و کیفیت توسعه",
    "توانایی تحلیل نیاز پروژه و ارائه بهترین راهکار فنی",
    "یادگیری سریع تکنولوژی‌های جدید و تطبیق با پروژه‌های مختلف",
    "تجربه مدیریت پروژه از طراحی تا انتشار و بهینه‌سازی",
    "تمرکز بر Performance، تجربه کاربری و کیفیت کدنویسی",
    "توانایی کار مستقل و تحویل پروژه End-to-End",
  ];

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
   const obs = new IntersectionObserver (([entry]) => {
    if(entry.isIntersecting){
      titles.forEach((_, index) => {
        setTimeout(() => {
          scrambleRefs.current[index]?.start();
        }, index * 50);
      });
      obs.disconnect();
    }
   } , {threshold : 0.15 });
   
  }, []);

  return (
    <div className=" flex flex-col text-sm md:text-[22px] font-light justify-center items-start  text-foreground dark:text-muted  overflow-hidden text-center ">
      {titles.map((model, index) => (
        <ScrambleIn
          key={index}
          ref={(el) => {
            scrambleRefs.current[index] = el;
          }}
          text={model}
          scrambleSpeed={28}
          scrambledLetterCount={5}
          autoStart={true}
        />
      ))}
    </div>
  );
}
