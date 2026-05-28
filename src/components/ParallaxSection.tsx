import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
}

const ParallaxSection = ({ children, offset = 50 }: ParallaxSectionProps) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, offset]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
