import { BriefcaseBusiness, Code2, Mail, User  } from "lucide-react";
import Dock from "@/components/Dock";
import { useNavigate } from "@tanstack/react-router";

export const QuickNav = () =>{
  const navigate = useNavigate();
    const items = [
      {
        icon: <User size={18} />,
        label: "درباره",
        onClick: () => navigate({ to: "/" }),
      },
      {
        icon: <Code2 size={18} />,
        label: "مهارت ها ",
        onClick: () => navigate({ to: "/" }),
      },
      {
        icon: <BriefcaseBusiness size={18} />,
        label: "نمونه کارها ",
        onClick: () => navigate({ to: "/" }),
      },
      {
        icon: <Mail size={18} />,
        label: "ارتباط با من ",
        onClick: () => navigate({ to: "/" }),
      },
    ];
    return (
      <div className="fixed -bottom-2 w-full z-30 md:hidden   ">
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    );
}