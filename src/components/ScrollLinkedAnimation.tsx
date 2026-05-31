import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollLinkedAnimationProps {
  children: ReactNode;
  type?: "scale" | "rotate" | "skew" | "blur";
}

const ScrollLinkedAnimation = ({ children, type = "scale" }: ScrollLinkedAnimationProps) => {
  const { scrollY } = useViewportScroll();

  const scale = useTransform(scrollY, [0, 1000], [0.95, 1.05]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 5]);
  const opacity = useTransform(scrollY, [0, 500], [0.8, 1]);

  const getMotionProps = () => {
    switch (type) {
      case "scale":
        return { scale, style: { opacity } };
      case "rotate":
        return { rotate, style: { opacity } };
      case "skew":
        return { skewY: useTransform(scrollY, [0, 1000], [0, 2]), style: { opacity } };
      default:
        return { style: { opacity } };
    }
  };

  return (
    <motion.div {...getMotionProps()}>
      {children}
    </motion.div>
  );
};

export default ScrollLinkedAnimation;
