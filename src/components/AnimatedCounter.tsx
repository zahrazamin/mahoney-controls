"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = "" 
}: { 
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from.toLocaleString("en-US"));

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.floor(value).toLocaleString("en-US"));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}
