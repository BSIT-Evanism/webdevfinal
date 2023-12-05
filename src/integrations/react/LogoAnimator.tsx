/**@jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

function LogoAnimate({
  children,
  url,
}: {
  children?: ReactNode[];
  url?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        layoutId="logo"
        initial={{ x: 0 }}
        animate={{ x: url === "shop" ? "90vw" : 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 2, type: "spring", bounce: 0.1 }}
        className="absolute left-0 top-0 p-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export const LogoAnimator = qwikify$(LogoAnimate, { eagerness: "load" });
