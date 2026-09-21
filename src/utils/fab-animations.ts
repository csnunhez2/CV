import type { Transition } from "framer-motion";

// FAB-specific animations
export const fabAnimations = {
  // FAB entrance animation
  fabEnter: {
    initial: { opacity: 0, scale: 0, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.5 } satisfies Transition,
  },

  // Floating motion (continuous)
  fabFloat: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } satisfies Transition,
  },

  // Hover effect
  fabHover: {
    whileHover: { scale: 1.1, y: -5 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 } satisfies Transition,
  },

  // Pulse effect (optional)
  fabPulse: {
    animate: { boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.7)", "0 0 0 15px rgba(59, 130, 246, 0)"] },
    transition: { duration: 2, repeat: Infinity } satisfies Transition,
  },

  // Modal enter/exit
  modalOverlayEnter: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 } satisfies Transition,
  },

  modalContentEnter: {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 },
    transition: { type: "spring", stiffness: 300, damping: 30 } satisfies Transition,
  },

  // Form field animation
  formFieldStagger: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },

  // Submit button
  submitButtonHover: {
    whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
    whileTap: { scale: 0.95 },
  },
};
