import { Outlet , createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/layout/header";
import { QuickNav } from "@/components/layout/quickNav";
import SplashCursor from "@/components/SplashCursor";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useEffect } from "react";
import Lenis from "lenis";
import ElasticLine from "@/components/fancy/physics/elastic-line";


export const Route = createRootRoute({
  component: Layout ,
});


function Layout () {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  } , [])
    return (
      <div className="min-h-dvh flex flex-col">
        <Header />
        <BackgroundRippleEffect />
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#ef8f00"
        />

        <main className="flex-1">
          <Outlet />
        </main>
        <QuickNav />

        {/* ====START : Footer Section ==== */}
        <div className="relative bottom-0 left-0 w-full ">
          <ElasticLine
            className="h-20! z-50"
            releaseThreshold={150}
            strokeWidth={1}
            animateInTransition={{
              type: "spring",
              stiffness: 50,
              damping: 5,
              delay: 0.15,
            }}
          />
        </div>
        {/* ====END : Footer Section ==== */}
      </div>
    );
}










