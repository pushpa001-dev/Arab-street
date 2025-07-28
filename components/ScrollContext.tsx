"use client";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import Lenis from "lenis";

// 1. Define the context type
type SmoothScrollContextType = Lenis | null;

// 2. Create the context
const SmoothScrollContext = createContext<SmoothScrollContextType>(null);

// 3. Custom hook
export const useSmoothScroll = () => useContext(SmoothScrollContext);

// 4. Props for provider
interface ScrollContextProps {
  children: ReactNode;
}

export default function ScrollContext({ children }: ScrollContextProps) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const scroller = new Lenis();
    setLenis(scroller);

    let rafId: number;

    const raf = (time: number) => {
      scroller.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      scroller.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
