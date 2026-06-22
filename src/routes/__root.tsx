import { Outlet , createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/layout/header";
import { QuickNav } from "@/components/layout/quickNav";
import SplashCursor from "@/components/SplashCursor";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useEffect } from "react";
import Lenis from "lenis";


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
      <>
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

        <Outlet />
        <QuickNav />
      </>
    );
}










