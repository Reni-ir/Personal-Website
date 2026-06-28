import { IconCloudSection } from "../ui/iconCloudSection";
import { TextAnimate } from "../ui/text-animate";

export default function Skill() {
  return (
    <div
      id="skill"
      className="Skill w-full h-[60dvh]  md:h-auto flex flex-col     "
    >
      <div className="flex flex-col md:flex-row max-w-300  w-full mx-auto h-full  md:items-center">
        <div className=" h-full w-full flex flex-col justify-end md:justify-center items-center relative overflow-hidden  ">
          <TextAnimate
            duration={1.2}
            className=" text-xl px-2 md:p-0 md:text-3xl font-light flex flex-wrap justify-center mb-2.5  "
            animation="blurInUp"
            by="word"
            once
          >
            مهارت هایی که در طول سالها تمرین و تجربه با عشق بدست آورده ام و بی
            وقفه در تلاش برای توسعه و بروزرسانی آنها هستم
          </TextAnimate>
        </div>
        <div className=" relative w-full">
          <IconCloudSection />
        </div>
      </div>
    </div>
  );
}
