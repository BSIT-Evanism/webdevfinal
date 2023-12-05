/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { type ReactNode } from "react";
import Marquee from "react-fast-marquee";

function Marquees({ children, url }: { children?: ReactNode[] }) {
  return (
    <div className="h-auto w-screen bg-lime-400 py-2">
      <Marquee gradient={false}>{children}</Marquee>
    </div>
  );
}

export const MarqueeSlider = qwikify$(Marquees, { eagerness: "visible" });
