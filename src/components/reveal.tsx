"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const isMounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const shouldReduceMotion = isMounted && reduceMotion === true;
  const shouldAnimate = isMounted && !shouldReduceMotion;

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? { opacity: 0.98, y: 4 } : false}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.14 }}
      transition={shouldAnimate ? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
    >
      {children}
    </motion.div>
  );
}
