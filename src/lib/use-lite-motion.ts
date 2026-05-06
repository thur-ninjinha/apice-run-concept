"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useLiteMotion() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return Boolean(reduceMotion) || isMobile;
}
