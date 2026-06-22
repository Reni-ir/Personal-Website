import { cn } from "@/lib/utils";
export const ReviewCard = ({
  img,
  name,
  height,
}: {
  img: string;
  name: string;
  height: number;
}) => {
  return (
    <figure
    style={{height : `${height}px` , width : `${height}px`}}
      className={cn(
        `relative flex justify-center items-center shrink-0 cursor-pointer overflow-hidden  `,
        // light styles
        "border-gray-950/1 bg-gray-950/1 hover:bg-gray-950/5",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex flex-row h-full w-full items-center justify-center  ">
        <img className="rounded-full w-full h-full " alt={name} src={img} />
      </div>
    </figure>
  );
};