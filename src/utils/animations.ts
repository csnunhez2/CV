// Standardized animation variants for consistent motion across the project

export const animationPresets = {
  // Page/Section entry animations
  pageEnter: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  // Container animations with staggered children
  containerStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Item animations (slide from left)
  itemSlideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },

  // Item animations (slide from bottom)
  itemSlideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },

  // Heading animations
  headingEnter: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  // Hover animations
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },

  hoverScaleSmall: {
    whileHover: { scale: 1.02 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },

  hoverScaleMedium: {
    whileHover: { scale: 1.08 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },

  hoverScaleLarge: {
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },

  // Icon tilt animation
  iconTilt: {
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },

  // Expand/Collapse animations
  expandCollapse: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },

  // Icon/Button animations
  buttonScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },

  // Rotate animations
  rotateHover: {
    whileHover: { rotate: 5 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },

  // Slide animations
  slideLeftHover: {
    whileHover: { x: 10 },
    transition: { duration: 0.2 },
  },

  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  fadeInDelayed: (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),

  // Stagger animation for tags/pills
  tagStagger: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: (index: number) => ({
      duration: 0.3,
      delay: index * 0.05,
      ease: "easeOut",
    }),
  },
};

// Quick preset combinations for common patterns
export const commonAnimations = {
  // Header animation
  header: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  // Logo/Title animation
  logo: {
    whileHover: { scale: 1.05 },
  },

  // Social link animation
  socialLink: {
    whileHover: { scale: 1.15, y: -4 },
    whileTap: { scale: 0.9 },
  },

  // Button animation
  button: {
    whileHover: { scale: 1.08, y: -3 },
    whileTap: { scale: 0.95 },
  },

  // Card animation
  card: {
    whileHover: { y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" },
  },

  // List item animation
  listItem: {
    whileHover: { x: 10 },
    transition: { duration: 0.2 },
  },

  // Icon tilt on hover
  iconTilt: {
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};
