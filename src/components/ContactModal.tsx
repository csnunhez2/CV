import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail } from "lucide-react";
import { useState } from "react";
import { fabAnimations } from "../utils/fab-animations";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío - En producción, integrar con EmailJS o backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            {...fabAnimations.modalOverlayEnter}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            {...fabAnimations.modalContentEnter}
            className="fixed bottom-32 right-6 w-80 rounded-2xl shadow-2xl z-50 border"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--card-border)" }}>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-heading" />
                <h3 className="text-lg font-bold text-heading">Contacto Rápido</h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={20} className="text-secondary" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3"
                  >
                    <Send size={24} className="text-green-500" />
                  </motion.div>
                  <p className="text-main font-medium">¡Mensaje enviado!</p>
                  <p className="text-secondary text-sm mt-1">Pronto me pondré en contacto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <motion.div
                    {...fabAnimations.formFieldStagger}
                    custom={0}
                  >
                    <label className="block text-sm font-medium text-secondary mb-1">Nome</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "var(--card-border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--glow-primary, #3b82f6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
                      placeholder="Teu nome"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    {...fabAnimations.formFieldStagger}
                    custom={1}
                  >
                    <label className="block text-sm font-medium text-secondary mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "var(--card-border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--glow-primary, #3b82f6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
                      placeholder="teu@email.com"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    {...fabAnimations.formFieldStagger}
                    custom={2}
                  >
                    <label className="block text-sm font-medium text-secondary mb-1">Mensaxe</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "var(--card-border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--glow-primary, #3b82f6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
                      placeholder="Escriba aquí..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    {...fabAnimations.submitButtonHover}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Close hint */}
            {!submitted && (
              <div className="px-6 py-3 border-t text-center text-xs text-tertiary" style={{ borderColor: "var(--card-border)" }}>
                Presiona <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">ESC</kbd> para cerrar
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
