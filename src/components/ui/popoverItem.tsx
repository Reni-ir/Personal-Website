import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ArrowLeft, Globe} from "lucide-react";
export default function PopOverItem ({website , title , img , url ,  alt }: {website:string , title : string  , img : string  , url : string , alt : string }) {
const [screenWidth , setScreenWidth] = useState<number>();
    useEffect(()=>{
        const handleResize = () =>{
          setScreenWidth(window.innerWidth);
        } 
        handleResize();
        window.addEventListener("resize" , handleResize )


        return ()=>{
          window.removeEventListener("resize" , handleResize)
        }
        
    },[])
    return (
      <Popover>
        <PopoverTrigger asChild className="">
          <div className="rounded-full bg-stone-100 shadow-2xl! overflow-hidden flex flex-col border-0 p-2 cursor-pointer ">
            <div className="flex items-center  gap-1 ">
              <Globe className="text-primary" size={24} />
              {Boolean((screenWidth ?? 0) > 768) && (
                <span className="text-foreground text-[9px] md:text-sm">
                  {website}
                </span>
              )}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={20}
          side="bottom"
          className="data-open:zoom-in-0! data-closed:zoom-out-0! origin-center duration-400 bg-background w-60 md:w-75 h-70 md:h-80 "
        >
          <div className="flex flex-col gap-2.5 justify-start items-center overflow-y-scroll ">
            <div className="text-xs ">{title}</div>
            <span className="text-foreground text-[9px] md:text-sm">
              {website}
            </span>
            <div className="w-full h-full  ">
              <img src={img} alt={alt} />
            </div>
          </div>
          <a
            className="text-xs text-muted-foreground flex items-center justify-center w-full gap-2"
            href={url}
          >
            مشاهده وبسایت <ArrowLeft size={14} />
          </a>
        </PopoverContent>
      </Popover>
    );
}