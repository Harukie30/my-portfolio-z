"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { LandingBottomShapes } from "@/components/landing-bottom-shapes";

type Ctx = {
  setOpenPortfolioHovered: (value: boolean) => void;
};

const LandingDecorHoverContext = createContext<Ctx | null>(null);

/** Used on the landing page so tech decor can react to the Open portfolio control. */
export function useOpenPortfolioHover() {
  return useContext(LandingDecorHoverContext);
}

export function LandingDecorHoverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openPortfolioHovered, setOpenPortfolioHovered] = useState(false);

  const setOpenPortfolioHoveredStable = useCallback((value: boolean) => {
    setOpenPortfolioHovered(value);
  }, []);

  const value = useMemo(
    () => ({ setOpenPortfolioHovered: setOpenPortfolioHoveredStable }),
    [setOpenPortfolioHoveredStable]
  );

  return (
    <LandingDecorHoverContext.Provider value={value}>
      <LandingBottomShapes visible={openPortfolioHovered} />
      {children}
    </LandingDecorHoverContext.Provider>
  );
}
