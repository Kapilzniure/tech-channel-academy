import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an element that should expand the cursor
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-expand")
      ) {
        setIsHovered(true);
        // Custom text if provided via data attribute
        const customText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
        if (customText) {
          setHoverText(customText);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't show cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center text-black font-bold text-[10px] tracking-widest overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (hoverText ? 80 : 40) : 16,
          height: isHovered ? (hoverText ? 80 : 40) : 16,
          backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered && hoverText ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {hoverText}
        </motion.span>
      </motion.div>
    </>
  );
}
