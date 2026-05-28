import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import { fabAnimations } from "../utils/fab-animations";

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  // Stop pulsing after first hover
  const handleMouseEnter = () => {
    setIsPulsing(false);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* FAB Button */}
      <motion.button
        {...fabAnimations.fabEnter}
        animate={isPulsing ? { ...fabAnimations.fabFloat.animate } : {}}
        transition={isPulsing ? fabAnimations.fabFloat.transition : undefined}
        whileHover={fabAnimations.fabHover.whileHover}
        whileTap={fabAnimations.fabHover.whileTap}
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
          boxShadow: isPulsing ? "0 0 0 0 rgba(59, 130, 246, 0.7)" : undefined,
        }}
        title="Abrir formulario de contacto (ESC para cerrar)"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>

      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FAB;
