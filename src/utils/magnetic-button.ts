import { MotionValue, useMotionValue, useTransform } from "framer-motion";

export const useMagneticButton = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = 100;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distanceFromCenter = Math.hypot(
      e.clientX - centerX,
      e.clientY - centerY
    );

    if (distanceFromCenter < distance) {
      const strength = (distance - distanceFromCenter) / distance;
      x.set(Math.cos(angle) * strength * 15);
      y.set(Math.sin(angle) * strength * 15);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    x,
    y,
    handleMouseMove,
    handleMouseLeave,
  };
};
