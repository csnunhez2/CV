import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

interface Blob {
  id: number;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const { scrollY } = useViewportScroll();

  // Create blobs with different sizes and positions
  const blobs: Blob[] = [
    { id: 1, size: 300, x: "10%", y: "10%", duration: 15, delay: 0, opacity: 0.3 },
    { id: 2, size: 200, x: "70%", y: "20%", duration: 20, delay: 2, opacity: 0.25 },
    { id: 3, size: 250, x: "80%", y: "70%", duration: 18, delay: 4, opacity: 0.2 },
    { id: 4, size: 150, x: "20%", y: "80%", duration: 16, delay: 1, opacity: 0.25 },
    { id: 5, size: 200, x: "50%", y: "50%", duration: 22, delay: 3, opacity: 0.15 },
    { id: 6, size: 180, x: "30%", y: "40%", duration: 17, delay: 5, opacity: 0.2 },
  ];

  // Parallax effect
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 100]);

  // Get blob colors based on theme
  const getBlobColor = (index: number) => {
    if (theme === "cyberpunk") {
      return index % 2 === 0 ? "rgba(255, 0, 255, " : "rgba(0, 255, 255, ";
    }
    if (theme === "dark") {
      return index % 2 === 0 ? "rgba(59, 130, 246, " : "rgba(147, 51, 234, ";
    }
    return index % 2 === 0 ? "rgba(59, 130, 246, " : "rgba(147, 51, 234, ";
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${getBlobColor(index)}${blob.opacity}), ${getBlobColor(index)}0))`,
            y: useTransform(parallaxY, (val) => val * (0.3 + index * 0.1)),
          }}
          animate={{
            x: [0, 30, -20, 50, -30, 0],
            y: [0, -40, 20, -30, 40, 0],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optional: Subtle grid pattern for cyberpunk */}
      {theme === "cyberpunk" && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255, 0, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            y: [0, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;
